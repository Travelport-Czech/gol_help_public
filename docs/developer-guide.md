# Developer Guide — GOL IBE Help Portal

This document covers everything a developer needs to understand, run, extend, and connect external content to the GOL IBE Help Portal.

---

## Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router, static export) |
| Language | TypeScript |
| Styling | CSS Modules (`portal-layout.module.css`) + global CSS (`app/globals.css`) |
| Markdown rendering | `react-markdown` + `remark-gfm` + `rehype-raw` |
| Deployment | GitHub Pages via GitHub Actions |
| Node version | 22 (build), 20 (CI) |

---

## Local development

```bash
npm install
npm run dev        # starts dev server at http://localhost:3000
npm run build      # static export to /out
```

The site is a fully static export (`output: "export"` in `next.config.ts`). No server-side runtime is required.

---

## Project structure

```
/
├── app/
│   ├── portal/
│   │   ├── data.ts                  # navigation: all categories and articles
│   │   ├── layout.tsx               # portal shell: sidebar, search, contact modal
│   │   ├── portal-layout.module.css # all portal CSS (sidebar, article, footer…)
│   │   ├── page.tsx                 # portal home page (tiles grid)
│   │   └── [section]/[slug]/
│   │       └── page.tsx             # individual article page
│   ├── globals.css                  # global CSS variables and prose styles
│   └── layout.tsx                   # root HTML layout
│
├── components/
│   ├── MarkdownBody.tsx             # renders markdown → HTML (images, iframes, video)
│   ├── ArticleContactButton.tsx     # "Contact Help" button (uses portal context)
│   ├── BackButton.tsx               # browser back button
│   └── ShareButton.tsx             # copy URL to clipboard
│
├── content/
│   └── docs/
│       ├── getting-started/         # markdown articles for Getting Started section
│       ├── configuration/           # markdown articles for Configuration section
│       ├── operations/              # markdown articles for Operations section
│       ├── troubleshooting/         # markdown articles for Troubleshooting section
│       └── release-notes/           # markdown articles for Release Notes section
│
├── lib/
│   ├── content.ts                   # reads markdown files from disk
│   └── sectionLabels.ts             # human-readable section names
│
├── public/
│   └── images/docs/                 # locally stored images referenced in articles
│
└── .github/
    └── workflows/
        ├── github-pages.yml         # deploys to GitHub Pages on push to main
        └── docs-ci.yml              # runs build check on PRs
```

---

## How articles work

### File naming

Each article is a Markdown file in `content/docs/<section>/`. The filename becomes the URL slug:

```
content/docs/getting-started/add-user.md
  → /portal/getting-started/add-user/
```

### Article format

```markdown
# Article title

<!-- tags: optional, comma, separated -->

Regular prose content using standard Markdown.

## Section heading

- Bullet list
- **Bold term** — explanation

### Sub-section

1. Numbered step
2. Next step
```

- The `# H1` title is extracted and rendered separately as the page `<h1>` — do **not** repeat it in the body.
- HTML is allowed (via `rehype-raw`) — useful for `<iframe>`, `<video>`, custom `<div>` wrappers.

### Adding a new article

1. Create `content/docs/<section>/<slug>.md`.
2. Add an entry to `app/portal/data.ts` under the appropriate category:

```ts
{ title: "My new article", href: "/portal/getting-started/my-new-article" }
```

3. Push to `main` — the site rebuilds and deploys automatically.

---

## Navigation structure (`app/portal/data.ts`)

All sidebar navigation is defined here. Each category has:

```ts
{
  icon: "🔧",
  name: "Category Name",
  desc: "Short description shown on the home tile",
  href: "/portal/<section>/<slug>",   // category overview page
  articles: [
    { title: "Article title", href: "/portal/<section>/<slug>" },
    // …
  ],
}
```

External links (shown below the topic list in the sidebar) are in the `EXTERNAL_LINKS` array at the bottom of the file.

---

## Embedding images

Images are stored in `public/images/docs/` and referenced in Markdown as:

```markdown
![Alt text](/images/docs/your-image.png)
```

On GitHub Pages the base path is `/new_help_public`, but Next.js handles the `assetPrefix` automatically — always use paths starting with `/images/…` without the repo prefix.

The `MarkdownBody` component renders `<img>` tags with `loading="lazy"`, rounded corners, and a border automatically.

---

## Embedding videos

### YouTube / Vimeo (iframe)

Paste an iframe directly in Markdown — `rehype-raw` allows raw HTML:

```html
<div class="video-wrap">
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    allowfullscreen
    frameborder="0">
  </iframe>
</div>
```

The `video-wrap` class (defined in `app/globals.css`) creates a responsive 16:9 container.

### Self-hosted video file

```html
<video src="https://your-cdn.com/video.mp4" controls></video>
```

Or reference a file in `/public`:

```markdown
![](/videos/tutorial.mp4)
```

The `MarkdownBody` component renders `<video>` tags with controls automatically.

### Right-side video panel

Every article page has a reserved **Videos panel** on the right side (`.articleVideoPanel` in `portal-layout.module.css`). Currently it shows a placeholder. To wire it up with real video URLs:

1. Add a `videos` frontmatter field or a separate data source (e.g., `data.ts` per-article or a JSON file).
2. Pass the URLs to `app/portal/[section]/[slug]/page.tsx`.
3. Replace the placeholder `<p>` in the `<aside className={s.articleVideoPanel}>` with actual `<iframe>` or `<video>` elements.

**Suggested data shape** (extend `data.ts` articles):

```ts
{
  title: "Add a new user",
  href: "/portal/getting-started/add-user",
  videos: [
    { label: "How to create a user", url: "https://www.youtube.com/embed/VIDEO_ID" },
  ],
}
```

---

## Deployment

Pushes to `main` trigger the `github-pages` GitHub Actions workflow:

1. `npm ci`
2. `npm run build` — generates static files in `/out`
3. Uploads `/out` to GitHub Pages

Live URL: **https://danielavokalova.github.io/new_help_public/**

The `basePath` is set to `/new_help_public` via the `NEXT_PUBLIC_BASE_PATH` environment variable configured in the Pages workflow.

---

## CSS and styling

| File | Purpose |
|------|---------|
| `app/globals.css` | CSS variables (`--navy`, `--orange`, etc.), prose styles, breadcrumb, back/share buttons |
| `app/portal/portal-layout.module.css` | Portal shell layout: sidebar, article page, video panel, footer buttons |

**Key CSS variables** (defined in `globals.css :root`):

```css
--navy:       #131f6b   /* primary brand blue */
--orange:     #e85e20   /* accent / CTA color */
--bg:         #eef3f6   /* page background */
--border:     #c0d9eb   /* borders */
--text-body:  #131f6b
--text-muted: #5a6b8a
```

---

## Content import scripts

Utility scripts in `/scripts/` (used for the initial content migration):

| Script | Purpose |
|--------|---------|
| `scrape-help.mjs` | Scrapes HTML from an existing help site |
| `transform-to-mdx.mjs` | Converts scraped HTML to Markdown |
| `import-markdown.mjs` | Imports Markdown files into `content/docs/` |
| `localize-images.mjs` | Downloads remote images to `public/images/docs/` |
| `rewrite-links.mjs` | Rewrites internal links after import |

---

## Adding a new section to the portal

1. Add the section slug to `SECTIONS` in `lib/content.ts`.
2. Add a human-readable label in `lib/sectionLabels.ts`.
3. Create the folder `content/docs/<new-section>/`.
4. Add a category entry in `app/portal/data.ts`.
5. Add articles (Markdown files) and register them in `data.ts`.
