import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://diogocarvalho88.github.io',
  output: 'static',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' }
});
