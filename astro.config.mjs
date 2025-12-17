// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";
import { remarkWikiLink } from "./src/plugins/remark-wiki-link";

// Project lives at https://pruning-my-pothos.github.io/prose/
// Keep explicit defaults for GitHub Pages to avoid base mismatches.
const base = process.env.BASE_PATH || "/prose";
const site = process.env.SITE_URL || "https://pruning-my-pothos.github.io/prose";

const useNoImageOptim = process.env.NO_IMAGE_OPTIM !== "false";

// https://astro.build/config
export default defineConfig({
  site,
  base,
  image: {
    service: useNoImageOptim
      ? { entrypoint: "astro/assets/services/noop" }
      : { entrypoint: "astro/assets/services/sharp" },
    domains: ["res.cloudinary.com", "images.unsplash.com"],
  },
  integrations: [
    mdx({
      remarkPlugins: [remarkWikiLink],
      shikiConfig: {
        theme: "night-owl",
        wrap: true,
      },
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    react(),
    icon(),
  ],
});
