# Pruning My Pothos

Personal site for Shailesh Rawat — a practice journal on pruning, adaptation, and quietly resilient growth across AI integration, work, and meaning. Built with Astro and MDX, featuring wiki links, backlinks, typed collections, OG generation, and a masonry-style layout.

## Stack
- Astro 5 (static output) with MDX
- Preact/React only where needed
- Tippy.js for previews, masonry layout in CSS
- Scripts: wiki-link generation, topic generation, OG generation

## Getting Started
```bash
make install   # npm install
make dev       # start dev server
make build     # full build (includes OG + image optimization; can take time)
make preview   # preview production build
make deploy    # git push + build + vercel --prod (see deploy.sh)
make push      # add, commit (MSG=...), push current branch
```

### Faster local builds / avoiding remote image failures
Image optimization is disabled by default (`NO_IMAGE_OPTIM` env var) to avoid remote image fetch failures. If you want to enable optimization, run with `NO_IMAGE_OPTIM=false` (requires sharp and valid remote URLs). OG images still generate; disabling optimization just skips resizing/formatting during build.

## Deployment Options
- **Vercel**: `./deploy.sh` pushes to GitHub, builds, then runs `vercel --prod`. Works on the free tier if within limits.
- **Static hosts** (GitHub Pages, Netlify, Cloudflare Pages, Hostinger, S3+CloudFront): run `make build` and deploy the `dist/` folder.
  - For Vercel CLI deploys, set `VERCEL_TOKEN` env var (or run `npx vercel login` once and export the token) so deploys are non-interactive.

## Content & Branding
- Collections live in `src/content/*` (notes, essays, patterns, talks, podcasts, smidgeons, now, library, antilibrary, pages).
- Site-wide branding/config: `src/utils/siteConfig.ts` (title, description, focus areas, social links, analytics placeholders).
- Layout, nav, footer: `src/layouts/Layout.astro`, `src/components/layouts/navbar/*`, `src/components/layouts/Footer.astro`.

## Important Scripts
- `npm run dev`: generates links + topics, then starts Astro dev
- `npm run build`: generates links + topics, then builds Astro (static)
- `npm run preview`: previews the production build
- `npm run generate-links`: run individually if needed

## Notes
- OG image generation uses Satori + Sharp; keep fonts available in `public/fonts/`.
- For custom domains on static hosts, point DNS to your provider and set `site` in `astro.config.mjs` accordingly.
