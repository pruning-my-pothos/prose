// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isDev = process.env.NODE_ENV === 'development';
const site = isDev ? 'http://localhost:4321' : 'https://pruning-my-pothos.github.io/prose/';
const base = isDev ? '/' : '/prose';

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
});
