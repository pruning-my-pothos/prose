// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";
import { remarkWikiLink } from "./src/plugins/remark-wiki-link";

const isCI = process.env.GITHUB_ACTIONS === "true";
const repoFull = process.env.GITHUB_REPOSITORY || "";
const [repoOwner, repoName] = repoFull.split("/");

const defaultBase = isCI && repoName ? `/${repoName}` : "/";
const base = process.env.BASE_PATH || defaultBase;

const defaultSite =
  isCI && repoOwner && repoName
    ? `https://${repoOwner}.github.io/${repoName}`
    : "https://pruningmypothos.com";
const site = process.env.SITE_URL || defaultSite;

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
