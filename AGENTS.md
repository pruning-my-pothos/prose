# AGENTS guide

Working notes for anyone (or any automation) updating this repo.

## Basics
- Stack: Astro with content collections (`src/content`), global styles in `src/styles/global.css`.
- Dev: `npm run dev` (or `make dev`) at http://localhost:4321/prose/.
- Build: `npm run build`; preview: `npm run preview`.
- Base path: `/prose` (see `astro.config.mjs`). Use `withBase()` for internal links.

## Editing rules
- Keep files ASCII; respect existing typography and spacing.
- Do not reset user changes or git history.
- Avoid destructive commands (`git reset --hard`, etc.).
- Use `withBase` for internal URLs and absolute URLs for Verse assets.
- When adding visuals, prefer SVGs in `public/images/`.
- For tables/callouts, use the shared styles (`rich-table`, `table-chip`, `.callout` classes).

## Content hygiene
- Practice/Work entries require frontmatter fields: `problem`, `approach`, `outcome`, `tools`, `links`.
- Always include ownership and review/freshness when describing governed content.
- Keep paragraphs short (2–4 sentences); favor bullet lists for steps/signals.

## Tests and QA
- Run `npm run build` if dependencies or layouts change. For styling/content-only tweaks, note if tests were skipped.
- Mobile nav: ensure header toggle works at ≤640px widths.

## Deployment
- Pages deploy from GitHub Actions on pushes to `main`.
- Social card: `public/social-card.svg`; SEO handled by `src/components/Seo.astro`.

If in doubt, follow `STYLEGUIDE.md` for formatting and tone.
