<div align="center">

<img src=".github/banner.svg" alt="Technical Project Management — Business Systems · Infrastructure · Security · Software Engineering" width="100%" />

<br />

[![Vue 3](https://img.shields.io/badge/Vue-3-0052FF?style=for-the-badge&logo=vuedotjs&logoColor=white)](https://vuejs.org)
[![Vue Router](https://img.shields.io/badge/Vue_Router-4-0052FF?style=for-the-badge&logo=vuedotjs&logoColor=white)](https://router.vuejs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-0052FF?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![vue-i18n](https://img.shields.io/badge/vue--i18n-11-0052FF?style=for-the-badge&logo=vuedotjs&logoColor=white)](https://vue-i18n.intlify.dev)
[![Vitest](https://img.shields.io/badge/Vitest-tested-0052FF?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev)
[![License](https://img.shields.io/badge/License-MIT-0052FF?style=for-the-badge)](LICENSE)

**I connect engineering, product and operations to turn complex technical initiatives into structured, secure and deliverable systems.**

</div>

---

## About

Personal portfolio for Albert López, positioned around **Technical Project Management · Business Systems, Infrastructure & Security · Software Engineering**. Not a generic Fullstack showcase — it's built to demonstrate the ability to translate between technology, product, operations and leadership.

Built with Vue 3 and Tailwind CSS, fully bilingual (English default, Spanish available), and deployed as a static site to GitHub Pages.

## Tech stack

| Layer | Tools |
| --- | --- |
| Framework | Vue 3 (`<script setup>`), Vue Router 4 |
| Styling | Tailwind CSS, Poppins |
| i18n | vue-i18n (English default, Spanish) |
| Testing | Vitest, @vue/test-utils |
| Tooling | Vue CLI, ESLint, Prettier |
| Deployment | GitHub Pages via GitHub Actions (`gh-pages`) |

## Getting started

```bash
npm install
npm run serve
```

The dev server runs at `http://localhost:8080`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run serve` | Start the dev server with hot reload |
| `npm run build` | Production build to `dist/` |
| `npm run lint` | ESLint + Prettier, auto-fixable |
| `npm test` | Run the Vitest suite once |
| `npm run test:watch` | Run Vitest in watch mode |
| `npm run deploy` | Publish `dist/` to the `gh-pages` branch |

## Project structure

```
src/
├── data/          # Centralized content — projects, timeline, capabilities, tech stack, contact
├── i18n/          # vue-i18n setup and locale files (en, es)
├── views/         # One view per route
├── components/    # Shared UI (NavBar, SiteFooter, cards, badges)
│   └── ui/        # Small reusable primitives (buttons, section headings, marquee)
├── utils/         # localize() helper and the useMeta() SEO composable
├── router/        # Route definitions, lazy-loaded per view
└── tests/         # Vitest specs
```

## Content model

All page content lives in `src/data/` as plain JS modules — no copy is hardcoded inside components. Bilingual fields use a `{ en, es }` shape resolved at render time through `localize()`, while static UI strings (nav, labels, buttons) go through `vue-i18n` message catalogs in `src/i18n/locales/`. English is the default locale; the visitor's choice is persisted in `localStorage`.

Case studies carry an explicit `status` (`planned` / `in_progress` / `available`) so in-progress work is shown honestly instead of backfilled with placeholder results.

## Design system

Dark hero with an animated gradient, `#0052FF` as the single accent color, bold Poppins type, and pill-shaped buttons — see `tailwind.config.js` for the full token set and `src/assets/main.css` for the animation keyframes.

## Deployment

Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): it installs dependencies, runs lint and tests, builds the app, and publishes `dist/` to the `gh-pages` branch — `git push` is the only step needed. Run it manually from the Actions tab (`workflow_dispatch`) if you ever need to redeploy without a new commit.

To deploy from a local machine instead, run `npm run build && npm run deploy`, which does the same publish step via the `gh-pages` package.

The production build targets GitHub Pages under `/my-portfolio/` (see `publicPath` in `vue.config.js`). Two details make this work under a sub-path with client-side routing: the router reads `process.env.BASE_URL` so it strips the `/my-portfolio/` prefix correctly, and a `postbuild` step copies `index.html` to `404.html` so GitHub Pages serves the app (instead of its own 404 page) for any deep link.

If the workflow's deploy step fails with a permissions error, go to **Settings → Actions → General → Workflow permissions** and enable **Read and write permissions** for the repository.

## License

MIT — see [LICENSE](LICENSE).
