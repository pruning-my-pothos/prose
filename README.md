# Pruning My Pothos

Personal site for Shailesh Rawat — a practice journal on pruning, adaptation, and quietly resilient growth across AI integration, work, and meaning. Built with Astro and MDX, featuring wiki links, backlinks, typed collections, OG generation, and a masonry-style layout.

## Stack
- Astro 5 (static output) with MDX
- Preact/React only where needed
- Tippy.js for previews, masonry layout in CSS
- Scripts: wiki-link generation, topic generation, webmention fetch, OG generation

## Getting Started
```bash
make install   # npm install
make dev       # start dev server
make build     # full build (includes OG + image optimization; can take time)
make preview   # preview production build
make deploy    # git push + build + vercel --prod (see deploy.sh)
make push      # add, commit (MSG=...), push current branch
```

### Faster local builds
The full build optimizes thousands of images and generates OG images. To speed up local builds, set a noop image service in `astro.config.mjs` (or gate it with an env flag) so Astro skips heavy optimization.

## Deployment Options
- **Vercel**: `./deploy.sh` pushes to GitHub, builds, then runs `vercel --prod`. Works on the free tier if within limits.
- **Static hosts** (GitHub Pages, Netlify, Cloudflare Pages, Hostinger, S3+CloudFront): run `make build` and deploy the `dist/` folder.

## Content & Branding
- Collections live in `src/content/*` (notes, essays, patterns, talks, podcasts, smidgeons, now, library, antilibrary, pages).
- Site-wide branding/config: `src/utils/siteConfig.ts` (title, description, focus areas, social links, analytics/webmention placeholders).
- Layout, nav, footer: `src/layouts/Layout.astro`, `src/components/layouts/navbar/*`, `src/components/layouts/Footer.astro`.

## Important Scripts
- `npm run dev`: generates links + topics, then starts Astro dev
- `npm run build`: generates links + topics + webmentions, then builds Astro (static)
- `npm run preview`: previews the production build
- `npm run generate-links` / `npm run fetch-webmentions`: run individually if needed

## Notes
- Webmention fetching requires a valid token; otherwise expect a 401 during build (non-fatal for static output).
- OG image generation uses Satori + Sharp; keep fonts available in `public/fonts/`.
- For custom domains on static hosts, point DNS to your provider and set `site` in `astro.config.mjs` accordingly.
