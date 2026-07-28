# Managing the GOL IBE Help Portal

The one page to start from if you need to change content, check whether the
site deployed, or figure out which of the other docs in this folder to read.

- **Live site:** https://travelport-czech.github.io/gol_help_public/
- **Repo:** https://github.com/Travelport-Czech/gol_help_public
- **Hosting:** GitHub Pages — a static site rebuilt and redeployed automatically
  every time a commit lands on `main`. There is no separate hosting dashboard
  to configure; watching the deploy just means watching GitHub Actions (below).

## Checking whether a deploy went through

Every push to `main` kicks off a build. To check its status:

1. Go to the repo: https://github.com/Travelport-Czech/gol_help_public
2. Click the **Actions** tab (top of the repo page, next to "Pull requests").
3. The top row is the most recent run. A **green check** means it deployed
   successfully; a **red X** means the build failed (click into the run to
   see which step and why — usually a broken markdown link or a TypeScript
   error); a **yellow dot** means it's still running.
4. Direct link to the runs list:
   https://github.com/Travelport-Czech/gol_help_public/actions/workflows/github-pages.yml

A run typically finishes in 1-2 minutes. The live site updates within a few
seconds after that.

## Editing an existing article

1. Open the `content/docs` folder as an Obsidian vault and edit the file
   directly. Full setup steps: [`obsidian-setup.md`](./obsidian-setup.md).
2. Save. No need to touch `app/portal/data.ts` for an edit to existing text —
   only new articles or renamed files need a menu update.
3. Commit, push, open a PR, merge to `main` per
   [`editorial-workflow.md`](./editorial-workflow.md).

## Adding a brand-new article

1. Write it in Obsidian, saved as
   `content/docs/<section>/<slug>.md` (`<section>` is one of
   `getting-started`, `configuration`, `operations`, `troubleshooting`,
   `release-notes`). First line must be a single `# Title`.
2. Add `{ title: "...", href: "/portal/<section>/<slug>" }` to the right
   category in `app/portal/data.ts` — this is what makes it show up in the
   site's sidebar/menu.
3. Run `npm run check:content` — it flags any article that's on disk but
   missing from the menu, or any menu entry pointing at a file that doesn't
   exist. Fix anything it reports.
4. Commit, push, open a PR, merge — see
   [`editorial-workflow.md`](./editorial-workflow.md).

## Publishing a "What's New" item

Release notes are a separate system from regular articles (JSON-based, not
individual markdown files), with its own 3-step manual-gate pipeline so
nothing publishes by accident:

```bash
npm run whats-new:add       # log a raw news item (any language, any source)
npm run whats-new:review    # mark it internal-only or customer-facing, write the public text
npm run whats-new:publish   # move approved items into the live release-notes.json, commit locally
```

Full details: [`whats-new-workflow.md`](./whats-new-workflow.md). There's also
a copy-paste LLM prompt for turning a raw release-notes email/doc into the
right JSON shape: [`whats-new-triage-prompt.md`](./whats-new-triage-prompt.md).

## Running it locally before you push anything

```bash
npm install
npm run dev      # http://localhost:3000 — preview your changes live
npm run build    # must succeed — this is exactly what GitHub Actions runs
```

## About Vercel

You may see Vercel mentioned in some of the other docs in this folder
(`vercel-setup.md`) or a `vercel-deploy.yml` workflow — **that is not what
publishes the live site.** GitHub Pages does, automatically, on every push to
`main`. The Vercel workflow only runs when someone manually triggers it, and
is not part of the day-to-day publishing flow.

## Map of the other docs in this folder

| File | What it's for |
|---|---|
| [`obsidian-setup.md`](./obsidian-setup.md) | Setting up and writing articles in Obsidian |
| [`editorial-workflow.md`](./editorial-workflow.md) | The PR/review steps between writing and merging |
| [`whats-new-workflow.md`](./whats-new-workflow.md) | The What's New / release-notes pipeline in detail |
| [`whats-new-triage-prompt.md`](./whats-new-triage-prompt.md) | LLM prompt to turn raw release notes into publishable JSON |
| [`developer-guide.md`](./developer-guide.md) | Deeper technical reference: file structure, styling, embedding images/video, adding a whole new section |
| [`style-guide.md`](./style-guide.md) | Writing voice/tone conventions |
| [`vercel-setup.md`](./vercel-setup.md) | How the (currently unused for production) manual Vercel deploy is configured |
| [`migration-checklist.md`](./migration-checklist.md) / [`import-gaps.md`](./import-gaps.md) | Notes from the original legacy-site import; only relevant if importing more old pages |
| [`github-cursor-onboarding.md`](./github-cursor-onboarding.md) | ⚠ References a different repo (`gitbook_golhelp`) — not this project, kept here by mistake as far as I can tell. Ignore unless you know otherwise. |
