import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://clambro.github.io',
  trailingSlash: 'never',
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
});
