# Pruning My Pothos

Personal site built with Astro content collections. Reading-first execution journal for applied practice, philosophy, and working notes.

## Quickstart
- Install: `npm install`
- Develop: `npm run dev` then open http://localhost:4321/prose/
- Build: `npm run build`
- Preview production build: `npm run preview`
- Shortcuts: `make dev`, `make build`, `make preview`, `make push` (add/commit/push), `make publish` (build + push)

## Content model
Content lives in `src/content/` as Markdown. All entries share:
`title`, `description`, `date`, `tags`, `status` (`draft` | `published`), `featured` (`true` | `false`).

Collections:
- `work/` (Practice) adds `problem`, `approach`, `outcome`, `tools` (array), `links` (array of `{ label, url }`).
- `lab/` (Working Notes: experiments) adds `hypothesis`, `build_notes`, `next_iteration`.
- `philosophy/` adds `lane` (`philosophy`), still using shared writing schema.
- `creative/`, `comms/` serve as Working Notes lanes with `lane` (`creative` | `comms`).

### Adding a Work case study
Create `src/content/work/my-case.md`:
```md
---
title: Title
description: Short description
date: 2024-09-01
tags: ["product", "delivery"]
status: published
featured: true
problem: The gap we needed to close.
approach: How we tackled it.
outcome: The measurable result.
tools: ["Tool A", "Tool B"]
links:
  - label: Artifact
    url: https://example.com
---
Body content here.
```

### Adding a Lab experiment
```md
---
title: Experiment name
description: What you tried
date: 2024-09-02
tags: ["ai", "workflow"]
status: published
featured: false
hypothesis: What you expect to learn.
build_notes: How you built it.
next_iteration: What happens next.
---
Observations and notes.
```

### Adding Writing (philosophy | creative | comms)
```md
---
title: Essay title
description: One-line summary
date: 2024-09-03
tags: ["writing", "systems"]
status: published
featured: false
lane: philosophy
---
Essay content here.
```

## Routes
- `/practice` and `/practice/[slug]` (from `work/`)
- `/philosophy` and `/philosophy/[slug]`
- `/working-notes` and `/working-notes/[slug]` (aggregates `lab/`, `creative/`, `comms/`)
- Legacy: `/lab`, `/work`, `/writing/*` still resolve but the primary navigation uses the above.
- `/about`
- `/rss.xml` (philosophy + working notes feed)

## How to add content quickly
- Practice: add a file under `src/content/work/` with the Practice schema. Include a clear problem, decision/approach, and outcome. Set `featured: true` to surface on the homepage.
- Philosophy: add under `src/content/philosophy/` with `lane: philosophy`. Keep paragraphs short; the reading layout enforces a narrow column.
- Working Notes: add under `src/content/lab/` for experiments or under `src/content/creative/` and `src/content/comms/` for other lanes. These aggregate at `/working-notes`.
- Use the links field in Practice to point at verse or other artifacts; base path aware links should use absolute URLs.

## Deployment and GitHub Pages
- `make push` will add/commit/push to `main`.
- GitHub Actions workflow at `.github/workflows/deploy.yml` builds on pushes to `main` and deploys via Pages.
- Ensure `astro.config.mjs` `site` is set to `https://pruning-my-pothos.github.io/prose/` (default) or your chosen domain, with `base: '/prose'`.
- Published site: `https://pruning-my-pothos.github.io/prose/` and RSS at `/prose/rss.xml`.

## Base path and SEO
- Site title: **Pruning My Pothos**
- Base path is `/prose` for GitHub Pages. `astro.config.mjs` is set to `https://pruning-my-pothos.github.io/prose/` with `base: '/prose'`; adjust if your hosting changes.
- Open Graph and basic meta tags are handled in `src/components/Seo.astro`. The default social image lives at `public/social-card.svg`.

## GitHub Pages deployment
- Workflow: `.github/workflows/deploy.yml` builds on pushes to `main` and deploys via GitHub Pages.
- In repository settings, enable Pages with source **GitHub Actions**.
- Ensure `astro.config.mjs` has `site` pointing to your live URL (for example `https://<user>.github.io/prose`) and `base: '/prose'`.
- Docs/verse link lives at `https://verse.YOURDOMAIN.com` in the header and footer; update it to your target URL.

## Publishing workflow
1) Commit content and code changes to `main` (or open a PR).
2) GitHub Actions runs the build and publishes to Pages.
3) Verify the live site at the Pages URL and the RSS feed at `/prose/rss.xml`.

## Notes
- Reading layout is narrow (max 720px), 19px body size, and generous line height for a Medium/Substack-like experience.
- Cards appear only on listing pages; essays render in a clean column without callouts.
