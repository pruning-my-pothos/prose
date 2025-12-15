// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pruning-my-pothos.github.io/prose/',
  base: '/prose',
  integrations: [sitemap()],
});
