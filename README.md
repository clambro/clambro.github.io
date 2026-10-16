# Personal Website

A personal website built with [Astro](https://astro.build/).

## Local checks

Run `npm ci` to install dependencies and the local pre-commit hook.
Commits check staged whitespace and repository formatting, then run `npm run lint`
and `npm run check` (Astro/TypeScript diagnostics). Checks do not rewrite files.
To fix formatting, run `npx prettier --write <file>` and stage the result.

## Deployment

Cloudflare Workers configuration is in `wrangler.jsonc`.
Build with `npm run build`, then deploy with `npx wrangler deploy`.
For Cloudflare Git integration, use branch `main` and the repository root
for both production and preview builds.
