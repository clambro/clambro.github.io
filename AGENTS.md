# Working on this website

This is an Astro static website. Run all commands from the repository root.
Use the same Node installation and npm scripts as the user; do not introduce
an isolated runtime or alternate development workflow.

## Setup, build, and preview

The Node version is pinned in `.nvmrc`. This workstation uses fnm:

```bash
fnm install
fnm use
npm ci
```

- `npm run dev`: start the development server.
- `npm run build`: build the entire site into `dist/`.
- `npm run preview`: serve the production build locally after building.
- `npm run format:check`: check formatting without changing files.
- `npm run lint`: run ESLint.
- `npm run check`: run Astro and TypeScript diagnostics.
- `npx prettier --write <file>`: fix formatting in specific files.

`npm ci` installs the local pre-commit hook. It checks staged whitespace,
repository formatting, lint, and types. Do not bypass failing checks.

Cloudflare Workers serves the static output using `wrangler.jsonc`.
`npx wrangler deploy --dry-run` checks deployment packaging without publishing.
`npx wrangler deploy` publishes the site; run it only when deployment is requested.

## Preparing a pull request

Reuse the checks and build already completed while testing the current changes.
Do not rerun passing pre-commit checks or rebuild an unchanged site just to
prepare a PR.

Run an existing broken-link checker against that build, covering internal links
and external links in published content. If the current changes have not yet
been built, build once as part of testing and use that output. Investigate
reported failures and include unresolved failures in the PR description.

## Scope and content

- Make the requested changes without adding unrelated editorial or design changes.
- Preserve article text and URLs unless their modification is requested.
- Commit only when requested.
