import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

export default defineConfig({
  output: 'static',
  publicDir: './static',
  site: 'https://nate.rip',
  build: { format: 'directory' },
  integrations: [svelte()],
});