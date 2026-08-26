/**
 * One-time: copy GitBook-imported files into website-shaped folders
 * that match the live portal (Agency, Dealers, …) so Obsidian's
 * file tree is the same as the site menu.
 *
 * Safe to re-run: overwrites destination files, leaves sources in place
 * until the copy succeeds, then moves leftovers into _inbox.
 */
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const DOCS = path.join(ROOT, "content", "docs");

function yamlEscape(value) {
  const s = String(value);
  if (/[:#{}[\],&*?|!<>=!%@`]/.test(s) || s.includes("\n") || s.includes('"')) {
    return JSON.stringify(s);
  }
  return s;
}

function toFrontmatter(fields, body) {
  const lines = ["---"];
  for (const [key, value] of Object.entries(fields)) {
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      if (value.length === 0) continue;
      lines.push(`${key}:`);
      for (const item of value) {
        if (typeof item === "string") {
          lines.push(`  - ${yamlEscape(item)}`);
        } else {
          lines.push("  -");
          for (const [k, v] of Object.entries(item)) {
            lines.push(`    ${k}: ${yamlEscape(v)}`);
          }
        }
      }
    } else {
      lines.push(`${key}: ${yamlEscape(value)}`);
    }
  }
  lines.push("---", "");
  const trimmed = body.replace(/^---[\s\S]*?---\s*/, "");
  return lines.join("\n") + trimmed.replace(/^\uFEFF/, "");
}

async function read(rel) {
  return fs.readFile(path.join(ROOT, rel), "utf8");
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function writeFile(filePath, contents) {
  await ensureDir(path.dirname(filePath));
  await fs.writeFile(filePath, contents, "utf8");
}

function parseSlugMap(src) {
  const map = {};
  const re = /"([^"]+)":\s*{\s*section:\s*"([^"]+)",\s*file:\s*"([^"]+)"\s*}/g;
  for (const m of src.matchAll(re)) {
    map[m[1]] = { section: m[2], file: m[3] };
  }
  return map;
}

function parseCategories(src) {
  const blocks = [];
  const re =
    /icon:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*desc:\s*"([^"]+)",\s*href:\s*"(\/portal\/[^"]+)",\s*articles:\s*\[([\s\S]*?)\],\s*},/g;
  for (const m of src.matchAll(re)) {
    const articles = [...m[5].matchAll(/\{\s*title:\s*"([^"]+)",\s*href:\s*"(\/portal\/[^"]+)"\s*\}/g)].map(
      (a) => ({ title: a[1], href: a[2] })
    );
    blocks.push({
      icon: m[1],
      name: m[2],
      desc: m[3],
      href: m[4],
      slug: m[4].replace(/^\/portal\//, ""),
      articles,
    });
  }
  return blocks;
}

function parseVideos(src) {
  const map = {};
  const blockRe = /"(\/portal\/[^"]+)":\s*\[([\s\S]*?)\]/g;
  for (const m of src.matchAll(blockRe)) {
    map[m[1]] = [
      ...m[2].matchAll(/label:\s*"([^"]+)",\s*youtubeId:\s*"([^"]+)"/g),
    ].map((v) => ({ label: v[1], youtubeId: v[2] }));
  }
  return map;
}

function parseWalkthroughs(src) {
  return [
    ...src.matchAll(
      /title:\s*"([^"]+)",\s*desc:\s*"([^"]+)",\s*steps:\s*(\d+),\s*category:\s*"([^"]+)",\s*href:\s*"(\/portal\/[^"]+)"/g
    ),
  ].map((m) => ({
    title: m[1],
    desc: m[2],
    steps: Number(m[3]),
    category: m[4],
    href: m[5],
  }));
}

function parseNamedArray(src, name) {
  const m = src.match(new RegExp(`export const ${name}[^=]*=\\s*\\[([\\s\\S]*?)\\];`));
  if (!m) return [];
  return [...m[1].matchAll(/\{([^}]+)\}/g)]
    .map((x) => {
      const block = x[1];
      const label = block.match(/label:\s*"([^"]+)"/)?.[1];
      const href = block.match(/href:\s*"([^"]+)"/)?.[1];
      if (!label || !href) return null;
      const item = { label, href };
      if (/isActive:/.test(block)) item.isActive = /isActive:\s*true/.test(block);
      return item;
    })
    .filter(Boolean);
}

async function main() {
  const [slugMapSrc, dataSrc, videosSrc] = await Promise.all([
    read("lib/slugMap.ts"),
    read("app/portal/data.ts"),
    read("lib/articleVideos.ts"),
  ]);

  const SLUG_MAP = parseSlugMap(slugMapSrc);
  const CATEGORIES = parseCategories(dataSrc);
  const VIDEOS = parseVideos(videosSrc);
  const WALKTHROUGHS = parseWalkthroughs(dataSrc);
  const APP_TABS = parseNamedArray(dataSrc, "APP_TABS");
  const EXTERNAL_LINKS = parseNamedArray(dataSrc, "EXTERNAL_LINKS");

  if (CATEGORIES.length === 0) {
    throw new Error("Failed to parse CATEGORIES from app/portal/data.ts");
  }

  const usedSources = new Set();
  const copied = [];

  for (let i = 0; i < CATEGORIES.length; i++) {
    const cat = CATEGORIES[i];
    const folderName = `${String(i + 1).padStart(2, "0")} ${cat.name}`;
    const folder = path.join(DOCS, folderName);

    const indexKey = cat.slug;
    const indexEntry = SLUG_MAP[indexKey];
    let indexBody = `# ${cat.name}\n\n${cat.desc}\n`;
    if (indexEntry) {
      const srcPath = path.join(DOCS, indexEntry.section, `${indexEntry.file}.md`);
      try {
        indexBody = await fs.readFile(srcPath, "utf8");
        usedSources.add(srcPath);
      } catch {
        console.warn(`Missing source for ${indexKey}: ${srcPath}`);
      }
    }

    await writeFile(
      path.join(folder, "_index.md"),
      toFrontmatter(
        {
          icon: cat.icon,
          name: cat.name,
          desc: cat.desc,
          slug: cat.slug,
          order: i + 1,
        },
        indexBody
      )
    );
    copied.push(`${folderName}/_index.md`);

    for (let j = 0; j < cat.articles.length; j++) {
      const article = cat.articles[j];
      const key = article.href.replace(/^\/portal\//, "");
      const entry = SLUG_MAP[key];
      const articleSlug = key.includes("/") ? key.split("/").slice(1).join("/") : key;
      let body = `# ${article.title}\n`;
      if (entry) {
        const srcPath = path.join(DOCS, entry.section, `${entry.file}.md`);
        try {
          body = await fs.readFile(srcPath, "utf8");
          usedSources.add(srcPath);
        } catch {
          console.warn(`Missing source for ${key}: ${srcPath}`);
        }
      }
      const videos = VIDEOS[article.href];
      await writeFile(
        path.join(folder, `${articleSlug}.md`),
        toFrontmatter(
          {
            title: article.title,
            order: j + 1,
            ...(videos?.length ? { videos } : {}),
          },
          body
        )
      );
      copied.push(`${folderName}/${articleSlug}.md`);
    }
  }

  const inbox = path.join(DOCS, "_inbox");
  await ensureDir(inbox);
  const oldSections = [
    "getting-started",
    "configuration",
    "operations",
    "troubleshooting",
    "release-notes",
  ];
  let inboxCount = 0;
  for (const section of oldSections) {
    const dir = path.join(DOCS, section);
    let entries = [];
    try {
      entries = await fs.readdir(dir);
    } catch {
      continue;
    }
    for (const name of entries) {
      if (!name.endsWith(".md")) continue;
      const srcPath = path.join(dir, name);
      if (usedSources.has(srcPath)) continue;
      const dest = path.join(inbox, `${section}__${name}`);
      await fs.copyFile(srcPath, dest);
      inboxCount += 1;
    }
    await fs.rm(dir, { recursive: true, force: true });
  }

  const homePath = path.join(ROOT, "content", "Home.md");
  const homeBody = toFrontmatter(
    {
      hero_title: "Hi, how can we help you?",
      hero_sub: "Search the GOL IBE knowledge base or browse by topic below.",
      search_chips: [
        "Users",
        "Service fee",
        "Working hours",
        "Email templates",
        "Cancel booking",
        "Flush caches",
      ],
      youtube_url: "https://www.youtube.com/@ceetravelsystems",
      youtube_title: "Video tutorials",
      youtube_sub: "Watch step-by-step guides on our YouTube channel →",
      most_visited: CATEGORIES[0].articles.slice(0, 5).map((a) => a.href),
      walkthroughs: WALKTHROUGHS,
      app_tabs: APP_TABS,
      external_links: EXTERNAL_LINKS,
    },
    `# Home page\n\nThis note controls the portal home page (hero text, search chips, walkthroughs, most visited).\n\nEdit the **Properties** at the top — you do not need to edit any code.\n`
  );
  await writeFile(homePath, homeBody);

  console.log(`Copied ${copied.length} portal pages into website-shaped folders.`);
  console.log(`Moved ${inboxCount} unmapped leftover files to content/docs/_inbox/.`);
  console.log("Wrote content/Home.md");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
