#!/usr/bin/env node
/**
 * Cross-checks the three places an article has to line up to be visible on the
 * portal: the markdown file itself (content/docs/<section>/<slug>.md), the
 * optional friendly-URL alias (lib/slugMap.ts), and the site nav registry
 * (app/portal/data.ts CATEGORIES). Run after adding/editing articles in
 * Obsidian, before opening a PR.
 *
 * Usage: npm run check:content
 */
import fs from "fs/promises";
import path from "path";

const ROOT = process.cwd();
const CONTENT_ROOT = path.join(ROOT, "content", "docs");

async function readText(relPath) {
  return fs.readFile(path.join(ROOT, relPath), "utf8");
}

function parseSections(contentTs) {
  const m = contentTs.match(/export const SECTIONS = \[([\s\S]*?)\] as const;/);
  if (!m) throw new Error("Could not find SECTIONS in lib/content.ts");
  return [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]);
}

function parseSlugMap(slugMapTs) {
  const map = new Map(); // key -> { section, file }
  const re = /"([^"]+)":\s*{\s*section:\s*"([^"]+)",\s*file:\s*"([^"]+)"\s*}/g;
  for (const m of slugMapTs.matchAll(re)) {
    map.set(m[1], { section: m[2], file: m[3] });
  }
  return map;
}

function parseCategoryHrefs(dataTs) {
  return [...dataTs.matchAll(/href:\s*"(\/portal\/[^"]+)"/g)].map((m) => m[1]);
}

async function walkMarkdownFiles(section) {
  const dir = path.join(CONTENT_ROOT, section);
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return [];
  }
  return entries
    .filter((e) => e.isFile() && e.name.endsWith(".md"))
    .map((e) => e.name.replace(/\.md$/, ""));
}

async function main() {
  const [contentTs, slugMapTs, dataTs] = await Promise.all([
    readText("lib/content.ts"),
    readText("lib/slugMap.ts"),
    readText("app/portal/data.ts"),
  ]);

  const SECTIONS = parseSections(contentTs);
  const SLUG_MAP = parseSlugMap(slugMapTs);
  const NAV_HREFS = new Set(parseCategoryHrefs(dataTs));

  // Every file's guaranteed default URL is /portal/<section>/<slug> (direct
  // section fallback in app/portal/[category]/[slug]/page.tsx), plus any
  // friendly aliases from SLUG_MAP that point at it.
  const aliasesByFile = new Map(); // "section/slug" -> ["/portal/agency/detail", ...]
  for (const [key, entry] of SLUG_MAP) {
    const fileKey = `${entry.section}/${entry.file}`;
    if (!aliasesByFile.has(fileKey)) aliasesByFile.set(fileKey, []);
    aliasesByFile.get(fileKey).push(`/portal/${key}`);
  }

  const notInNav = [];
  const allFileKeys = new Set();

  for (const section of SECTIONS) {
    const slugs = await walkMarkdownFiles(section);
    for (const slug of slugs) {
      const fileKey = `${section}/${slug}`;
      allFileKeys.add(fileKey);
      const candidates = [`/portal/${section}/${slug}`, ...(aliasesByFile.get(fileKey) ?? [])];
      const reachable = candidates.some((href) => NAV_HREFS.has(href));
      if (!reachable) {
        notInNav.push({ fileKey, candidates });
      }
    }
  }

  const brokenSlugMap = [...SLUG_MAP.entries()].filter(
    ([, entry]) => !allFileKeys.has(`${entry.section}/${entry.file}`)
  );

  const brokenNavLinks = [...NAV_HREFS].filter((href) => {
    const key = href.replace(/^\/portal\//, "");
    if (SLUG_MAP.has(key)) return false; // resolved via alias
    const [section, ...rest] = key.split("/");
    const slug = rest.length ? rest.join("/") : section;
    return !allFileKeys.has(`${section}/${slug}`);
  });

  let ok = true;

  if (notInNav.length) {
    ok = false;
    console.log(`\n⚠ ${notInNav.length} article(s) exist on disk but aren't linked from any menu (app/portal/data.ts):\n`);
    for (const { fileKey, candidates } of notInNav) {
      console.log(`  - content/docs/${fileKey}.md`);
      console.log(`      add to CATEGORIES with href: "${candidates[0]}"`);
    }
  }

  if (brokenSlugMap.length) {
    ok = false;
    console.log(`\n⚠ ${brokenSlugMap.length} lib/slugMap.ts entr${brokenSlugMap.length === 1 ? "y points" : "ies point"} at a file that no longer exists:\n`);
    for (const [key, entry] of brokenSlugMap) {
      console.log(`  - "${key}" -> content/docs/${entry.section}/${entry.file}.md (missing)`);
    }
  }

  if (brokenNavLinks.length) {
    ok = false;
    console.log(`\n⚠ ${brokenNavLinks.length} menu link(s) in app/portal/data.ts point at a file that doesn't exist:\n`);
    for (const href of brokenNavLinks) {
      console.log(`  - ${href}`);
    }
  }

  if (ok) {
    console.log(`✓ All ${allFileKeys.size} articles are linked from the menu, and every menu link resolves to a file.`);
  } else {
    console.log("");
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
