# SERONZ / SYSTEMS ENGINEERING

A static engineering portfolio for a Platform / Site Reliability Engineer.

Platform engineering, reliability, Linux, networking, and tools built to
understand how systems behave when things go wrong.

## Stack

- React + TypeScript (strict) built with Vite
- React Router for the handful of routes the site needs
- Plain CSS with CSS Modules and design tokens (`src/styles/tokens.css`)
- ESLint + Prettier, Vitest + React Testing Library
- GitHub Actions + GitHub Pages for free static hosting

No backend, database, CMS, or paid service.

## Scripts

| Command                | What it does                              |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Start the dev server                      |
| `npm run build`        | Type-check and produce a production build |
| `npm run preview`      | Preview the production build locally      |
| `npm run typecheck`    | Type-check only                           |
| `npm run lint`         | Run ESLint                                |
| `npm run format`       | Check formatting with Prettier            |
| `npm run format:write` | Apply Prettier formatting                 |
| `npm run test`         | Run the test suite once                   |
| `npm run test:watch`   | Run tests in watch mode                   |

Run `npm run lint && npm run typecheck && npm run test` before committing.

## Project structure

```
src/
  components/     Reusable UI (Header, Footer, Section, cards, layout)
  content/        Editable site content — per-language dictionaries
  i18n/           Language context, provider, and switch wiring
  pages/          One file per route
  styles/         Design tokens and global styles
  test/           Test setup
  App.tsx         Route definitions
  main.tsx        App entry + router
```

Content is kept out of components. To change what the site says, edit the files
in `src/content/` rather than the UI.

## Editing content

The site is bilingual (English and Indonesian). Content is authored per
language and must satisfy the shared `ContentDictionary` type, so a missing
translation fails the type check instead of silently rendering blank.

- `src/content/en.ts` — English content.
- `src/content/id.ts` — Indonesian content.
- `src/content/types.ts` — shared content types.
- `src/content/index.ts` — language registry and `getContent(language)`.
- `src/content/contact.ts` — contact links from environment variables.

When you edit one language file, mirror the change in the other. Each file
contains identity, hero copy, approach, focus areas, experience, navigation,
projects, notes, and UI strings.

The language switch (top-right) is a small context provider
(`src/i18n/`). It stores the choice in `localStorage` and falls back to the
browser language. No URL changes are involved, so it works unchanged on
GitHub Pages.

**Only publish verified, non-confidential information.** Fields marked `TODO`
are placeholders and must be replaced before the site goes public. Nothing is
presented as finished unless it actually is.

### Contact details (kept out of the repo)

Public contact links are not stored in the repository. They are read from
build-time environment variables, so the source can stay clean:

| Variable                | Example                          |
| ----------------------- | -------------------------------- |
| `VITE_CONTACT_EMAIL`    | `name@example.com`               |
| `VITE_CONTACT_GITHUB`   | `https://github.com/your-handle` |
| `VITE_CONTACT_LINKEDIN` | `https://linkedin.com/in/you`    |

Any variable that is unset is simply omitted — the site never shows a fake
address.

- **Locally:** copy `.env.example` to `.env` and fill it in (`.env` is
  git-ignored).
- **In CI:** add them under **Settings → Secrets and variables → Actions →
  Variables** (the _Variables_ tab, since they are public). The workflow passes
  them to the build.

Note: environment variables avoid committing the values, but they are still
inlined into the shipped site, where visitors can read them. Only put contact
details you are happy to publish.

## Deploying to GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds, lints, type-checks, and
tests the site, then deploys `dist/` to GitHub Pages.

Manual setup required once, in the repository settings:

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` (or run the workflow manually). The site publishes to
   `https://<user>.github.io/<repo>/`.

### Base path

The build reads the `BASE_URL` environment variable. The workflow sets it to
`/<repository-name>/`, which is correct for a project site such as
`https://<user>.github.io/engineering-portofolio/`.

Change it to `/` if you deploy to:

- a user/org site (`https://<user>.github.io`), or
- a custom domain.

Client-side routing on Pages is handled by `public/404.html` plus a small
restore script in `index.html`. If you set `BASE_URL` to `/`, also change
`pathSegmentsToKeep` in `public/404.html` from `1` to `0`.

### Custom Node version

`.nvmrc` pins Node 22. If your environment reports unsupported-engine warnings,
upgrade to Node 22.13+ or 24.
