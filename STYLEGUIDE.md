# Documentation style guide

A concise guide to keep essays, case studies, and Verse pages consistent and “Confluence-like” for readability and trust.

## Voice and structure
- Write in clear, direct sentences; avoid hype. Prefer short paragraphs (2–4 sentences).
- Lead with context → objectives → actions → outcomes. Keep bullets parallel.
- Surface ownership and freshness whenever you cite governed content.
- Use headings sparingly (##, ###) to keep the reading rhythm calm.

## Formatting patterns
- **Callouts:** Use HTML blocks to mimic Confluence panels:
  - Info: `<div class="callout info">...</div>`
  - Warning: `<div class="callout warning">...</div>`
  - Success: `<div class="callout success">...</div>`
  - Muted/Note: `<div class="callout muted">...</div>`
- **Tables:** Prefer `rich-table` for structured data and chips for status:
  ```html
  <table class="rich-table">
    <thead><tr><th>Field</th><th>Owner</th><th>Status</th></tr></thead>
    <tbody>
      <tr>
        <td>Security FAQ</td>
        <td>Security</td>
        <td><span class="table-chip alert">Locked</span></td>
      </tr>
    </tbody>
  </table>
  ```
- **Lists:** Keep bullets tight; avoid nested lists unless necessary.
- **Quotes:** Use `>` for key principles; avoid over-quoting.
- **Links:** For internal pages, use `withBase('/path')` in Astro. For Verse assets, link to `/verse/<file>.html` or the canonical absolute URL.

## Visual aids
- Use SVGs in `public/images/` for diagrams; keep labels non-overlapping and legible.
- Pair visuals with a one-line caption or context sentence.
- Keep colors within the existing palette (accent `#0c5a69`, soft greens, light grays).

## Content types
- **Practice/Work:** Include `problem`, `approach`, `outcome`, `tools`, `links` in frontmatter. Show measurable outcomes and ownership.
- **Philosophy/Notes:** Keep paragraphs short; highlight actionable frames rather than advice.
- **Verse references:** When a doc relies on supporting material, add a short “Assets” or “References” section linking to Verse pages.

## Accessibility and readability
- Body text targets 19px with generous line height; keep sentences scannable.
- Avoid jargon when a precise plain-language alternative exists.
- Use status chips (`table-chip` classes) to show freshness/review cadence in tables.

## File placement
- Markdown content lives in `src/content/<collection>/`.
- Public assets (SVGs, Verse HTML) live in `public/` and its subfolders.
- Keep diagrams and supporting files alongside their references and link using the base path.
