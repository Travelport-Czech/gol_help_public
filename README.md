# gol_help_en

Documentation portal for GOL IBE help. Live site:
https://travelport-czech.github.io/gol_help_public/portal/

## Stack

- Next.js (App Router, static export)
- Markdown content in `content/` — edited in Obsidian
- GitHub Pages on every push to `main`

## Quick Start

1. Install dependencies: `npm install`
2. Run locally: `npm run dev` → http://localhost:3000/portal/
3. Edit content in Obsidian: open this repository as a vault and start from
   `content/00 Start here.md` (see `docs/obsidian-setup.md`).

Articles live in `content/docs/<nn Topic>/<slug>.md` and appear on the site at
`/portal/<topic>/<slug>/`. The menu is generated from those files.

## Collaboration Workflow

1. Edit markdown in Obsidian
2. Commit and open a Pull Request (or push to `main` if that is your process)
3. GitHub Pages publishes automatically

## Conventions

- Authoring rules: `.cursor/rules/`
- Agent skills: `.cursor/skills/`
- Editorial guide: `docs/style-guide.md`
- Site operations: `docs/site-management-guide.md`
