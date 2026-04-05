import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://sahajananddigital.in',
  integrations: [sitemap(), mdx()],
  server: {
    port: 3000
  }
});
