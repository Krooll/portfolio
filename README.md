# Portfolio

Personal portfolio website built with Angular. The application presents profile information, work experience, projects, technologies, education, and contact options in a multilingual, responsive single-page experience.

## Tech Stack

- Angular 21 with standalone components and lazy-loaded routes
- TypeScript 5.9
- Angular Router
- Angular Material snack bars
- Angular reactive forms
- `@ngx-translate/core` for runtime translations
- Bootstrap 5
- SCSS global and feature-level styles
- Vitest / Angular test builder
- ESLint and Prettier

## Features

- Main portfolio sections: home, about me, experience, projects, technologies, education, and contact.
- Lazy-loaded shells and pages for most routes to keep the initial bundle focused.
- Multilingual UI with Polish fallback and translation files for `pl`, `en`, `de`, and `it`.
- Custom `translateFallback` pipe that returns local fallback text when a translation key is missing.
- Theme switching with persisted `dark` / `light` mode in `localStorage`.
- Experience page with career entries and language-aware resume download.
- Projects page with project descriptions, external links, and screenshot previews.
- Contact form using Angular reactive forms and Web3Forms submission.
- Static assets served from `public`, including icons, screenshots, SEO files, and resume PDFs.

## Application Routes

| Path          | Description                        |
| ------------- | ---------------------------------- |
| `/main-page`  | Landing page                       |
| `/about-me`   | Profile and personal information   |
| `/experience` | Career history and resume download |
| `/projects`   | Portfolio projects and screenshots |
| `/technology` | Technologies, tools, and AI tools  |
| `/education`  | Education section                  |
| `/contact`    | Contact form and social links      |

Unknown routes redirect to `/main-page`.

## Project Structure

```text
src/
  app/
    app.config.ts       Angular providers, router, HTTP, translations
    app.routes.ts       Application route definitions
    translate-loader.ts ngx-translate HTTP loader
  global-styles/        Global SCSS entry point

project-features/
  features/             Page-level feature components
  shells/               Route shell components
  shared/
    pipes/              Shared standalone pipes
    services/           Language and theme services
    shared-assets/i18n/ Translation JSON files copied to /i18n
    shared-features/    Header, footer, theme switcher, typewriter, WIP UI

public/
  icons/                UI and technology icons
  screenshots/          Project screenshots
  resume/               Resume PDFs
  robots.txt
  sitemap.xml
```

## Requirements

- Node.js 22
- npm 9.4.0

The CI pipeline also runs on Node.js 22 and uses `npm ci`.

## Getting Started

Install dependencies:

```bash
npm ci
```

Start the local development server:

```bash
npm start
```

Open `http://localhost:4200/`. The dev server redirects the root route to `/main-page`.

## Available Scripts

```bash
npm start          # Run the Angular development server
npm run build      # Create a production build
npm run watch      # Build in development watch mode
npm run lint       # Run ESLint
npm run format     # Format files with Prettier
npm run format:check
npm test           # Run unit tests
npm run test:ci    # Run tests once for CI
```

## Internationalization

Translations live in:

```text
project-features/shared/shared-assets/i18n/
```

During build, Angular copies them to `/i18n`. The app initializes the language from `localStorage.currentLang` and falls back to Polish when no language is stored. Supported language IDs are:

- `pl`
- `en`
- `de`
- `it`

The experience page uses the selected language to choose the resume file. Polish downloads `Pawel_Krol_CV_PL.pdf`; English, German, and Italian download `Pawel_Krol_CV_EN.pdf`.

## CI

GitHub Actions runs on pull requests and performs:

```bash
npm ci
npm run lint
npm run test:ci
npm run build
```
