# Eric de Oliveira Souza · Portfolio

[![CI](https://github.com/Eric-Souza/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Eric-Souza/portfolio/actions/workflows/ci.yml)

Personal site for a Sr. Full Stack & AI Engineer: **[portfolio-mu-blond-54.vercel.app](https://portfolio-mu-blond-54.vercel.app)**

React 19 · TypeScript · Vite · Material UI · Framer Motion · Vitest · Playwright

## Design decisions

**Prerendered, then hydrated.** A single-page app normally ships an empty `<div id="root">`, which means
crawlers and link-preview bots see nothing. Instead, the build renders the whole page to static HTML
(including the Emotion critical CSS) and the client hydrates it:

1. `vite build` produces the client bundle and `dist/index.html`
2. `vite build --ssr src/entry-server.tsx` produces a Node render function
3. [`scripts/prerender.js`](scripts/prerender.js) injects the HTML and styles into the
   `<!--app-head-->` / `<!--app-html-->` markers in `dist/index.html`

[`src/main.tsx`](src/main.tsx) calls `hydrateRoot` when prerendered markup exists and `createRoot` in dev.
Both sides share one Emotion cache key, so hydration reuses the server style tags. Meta, Open Graph,
Twitter and JSON-LD tags are static in [`index.html`](index.html), because they never change at runtime.

**Content is data, not markup.** Every section is rendered from typed files in [`src/data`](src/data)
([`types.ts`](src/data/types.ts) is the schema). Updating the site means editing data, and
[`data.test.ts`](src/data/data.test.ts) catches broken content: duplicate ids, non-https links, missing
assets.

**Projects have two audiences.** The Projects section is built from case studies: each [`CaseStudy`](src/data/types.ts) has a business view
(challenge, outcomes, optional `metrics`) for hiring managers and a `technical` view (architecture,
how it was built, stack by layer) for engineers. [`CaseStudyCard`](src/components/ui/CaseStudyCard.tsx)
shows them as accessible tabs. The headline and role stay visible on both.

Client work sits alongside side projects, hiring challenges and learning repos (one study per public
repo), so every study has a `kind`, an `industry` and `tech` tags. Tags cover languages (TypeScript,
JavaScript, Python, AI) and cloud/delivery work (AWS, Docker, CI/CD, hosting), and the section filters
on type, industry, language and platform, with live counts per option (the total only shows while filtering)
([`filters.ts`](src/data/caseStudies/filters.ts)). Every technical breakdown leads with an Architecture
layer, and Infrastructure and CI/CD layers appear only where the repo or role backs them up;
[`data.test.ts`](src/data/data.test.ts) keeps those layers and the tags in sync.

By default the list is sorted by most recently updated, and a Sort chip can switch it to client work
first. Client work is dated by the end of the role (`updated`), or flagged `ongoing` for a current role.
Repo studies take the last push date from [`repoDates.json`](src/data/caseStudies/repoDates.json). Run
`npm run sync-dates` to refresh that file; the build never calls the GitHub API.

Tool, tech and architecture names in the prose are highlighted for skimming. The vocabulary in
[`terms.ts`](src/data/terms.ts) is built from the stack chips and skills, so new content is
highlighted without a hand-kept list.

**Accessible by default.** `MotionConfig reducedMotion="user"` and a `prefers-reduced-motion` rule turn off
animation for users who ask for it. Colors live in a single palette in
[`theme.ts`](src/theme/theme.ts), and text/background pairs meet WCAG AA contrast.

## Project structure

```
src/
  data/            typed content (profile, experience, case studies, skills)
  components/
    layout/        Navbar, Footer, Section
    sections/      one component per page section
    ui/            cards, chips, timeline, background
  theme/           MUI theme and color palette
  AppProviders.tsx provider tree shared by client and server
  entry-server.tsx render-to-string entry for prerendering
scripts/           prerender + Open Graph image generator
e2e/               Playwright smoke tests against the production build
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with HMR (client-rendered) |
| `npm run build` | Typecheck, client build, SSR build, prerender into `dist/` |
| `npm run preview` | Serve `dist/` on port 4173 |
| `npm run lint` / `npm run typecheck` | ESLint / `tsc -b` |
| `npm test` | Vitest unit and component tests (jsdom) |
| `npm run test:e2e` | Playwright on desktop and mobile viewports against the built site; run `npm run build` first |
| `npm run og-image` | Regenerate `public/og-image.png` from the profile data |

Playwright downloads its own Chromium (`npx playwright install chromium`). To use an installed Chrome
instead, set `PW_CHANNEL=chrome`.

## Testing

- **Unit/component (Vitest + Testing Library):** content integrity, case study filtering and tabs, and a
  full-app render that checks every nav target has a section.
- **End to end (Playwright):** the production build hydrates with no console errors or failed requests,
  SEO/OG tags are present and the OG image resolves, nav scrolling works, case study tabs work,
  and with JavaScript disabled the prerendered HTML still contains the full content.

[CI](.github/workflows/ci.yml) runs lint, typecheck, unit tests, build and e2e on every push and PR.

## Deploy

Deployed on Vercel. [`vercel.json`](vercel.json) runs `npm run build` and serves `dist/`.
After changing the domain, update the canonical, `og:url`, `og:image` and JSON-LD URLs in
[`index.html`](index.html).
