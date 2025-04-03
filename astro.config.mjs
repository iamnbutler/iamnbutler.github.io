import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://nate.rip",
  integrations: [
    mdx({
      // Enable custom MDX components
      components: {
        "img": "src/components/HostedImage.astro",
      }
    }),
    sitemap(),
    tailwind()
  ],
});
