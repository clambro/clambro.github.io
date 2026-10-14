# Personal Website

A personal website built with [Astro](https://astro.build/).

## Deployment

Cloudflare Workers configuration is in `wrangler.jsonc`.
Build with `npm run build`, then deploy with `npx wrangler deploy`.
For Cloudflare Git integration, use branch `main` and the repository root
for both production and preview builds.
