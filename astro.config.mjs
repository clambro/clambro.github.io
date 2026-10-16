import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://costantinos.dev',
  trailingSlash: 'never',
  compressHTML: true,

  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },

  integrations: [sitemap()],
});
