import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import backblazeAssets from "./src/integrations/backblaze-assets.js";

export default defineConfig({
  site: "https://nate.rip",
  integrations: [mdx(), sitemap(), tailwind(), backblazeAssets()],
});
