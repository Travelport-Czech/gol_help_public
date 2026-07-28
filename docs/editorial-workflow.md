# Editorial Workflow

## Authoring

Articles are plain markdown files under `content/docs/<section>/<slug>.md`.
Open the `content/docs` folder directly as an Obsidian vault to write and edit
them (live preview, search, no dev server needed). See
`docs/obsidian-setup.md` for the one-time setup.

New articles need one manual step beyond saving the file: add a
`{ title, href }` entry to the matching category in `app/portal/data.ts` so it
appears in the site menu (`href` is `/portal/<section>/<slug>`). Run
`npm run check:content` before opening a PR — it flags any article on disk
that isn't linked from the menu yet, and any menu link pointing at a missing
file.

## Standard Flow

1. Author updates content in branch.
2. Author opens Pull Request.
3. Reviewer checks clarity, structure, and links.
4. Reviewer validates Vercel preview.
5. PR is merged to `main`.
6. Vercel publishes production.

## Fast Fix Flow

For urgent fixes:

1. Open small PR with explicit "hotfix" label.
2. Require one fast approval.
3. Merge immediately after checks pass.
