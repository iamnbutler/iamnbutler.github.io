import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import gruvboxDark from "./shiki_gruvbox_dark.json";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      defaultColor: false,
      theme: gruvboxDark,
      langs: [
        "astro",
        "yaml",
        "json",
        "toml",
        "javascript",
        "typescript",
        "tsx",
        "jsx",
        "css",
        "scss",
        "html",
        "markdown",
        "shell",
        "bash",
        "zsh",
        "python",
        "ruby",
        "go",
        "rust",
        "swift",
        "php",
        "sql",
        "plaintext",
      ],
      wrap: false,
      // Add custom transformers: https://shiki.style/guide/transformers
      // Find common transformers: https://shiki.style/packages/transformers
      transformers: [],
    },
  },
});
