# Editing content in Obsidian

Articles live as plain markdown files in `content/docs/<section>/<slug>.md`,
where `<section>` is one of `getting-started`, `configuration`, `operations`,
`troubleshooting`, `release-notes`. That folder can be opened directly as an
Obsidian vault.

## One-time setup

1. Open Obsidian.
2. **Open** → **Open folder as vault**.
3. Select the repo's `content/docs` folder (not the whole repo — the rest is
   application code, not content).
4. Obsidian creates its own `.obsidian/` config folder inside `content/docs`
   on first open. It's already in `.gitignore`, so it won't get committed.

## Writing an article

- Each file's first line must be a single `# Title` — the site strips it off
  and uses it as the page heading, and derives the browser-tab title from it.
- Everything below the H1 is rendered as the article body via
  `react-markdown` + `remark-gfm` (GitHub-flavored markdown: tables,
  checklists, strikethrough, etc. all work).
- Save the file inside the right section folder, with a lowercase,
  hyphenated filename — that filename becomes the URL slug.

## Making a new article visible on the site

Saving the `.md` file is not enough by itself — the site's menu is a
separate hand-maintained list in `app/portal/data.ts` (`CATEGORIES`). A file
with no matching entry there exists and is reachable by direct URL
(`/portal/<section>/<slug>`), but nobody will find it from the menu.

After adding or renaming an article:

1. Add `{ title: "...", href: "/portal/<section>/<slug>" }` to the relevant
   category's `articles` array in `app/portal/data.ts`.
2. Run `npm run check:content` from the repo root. It reports:
   - articles on disk with no menu entry,
   - menu entries pointing at a file that doesn't exist,
   - any `lib/slugMap.ts` alias pointing at a missing file.
3. Fix anything it flags, then open your PR as usual (see
   `docs/editorial-workflow.md`).

## What's New / release notes

The "What's New" panel is a separate system (JSON-based, not individual
markdown files) — see the `whats-new:add` / `whats-new:review` /
`whats-new:publish` scripts, not this Obsidian vault.
