# Ufere Kalu — Portfolio

Personal portfolio site for Ufere Kalu, Full Stack Developer & Data Analyst.

Built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, and framer-motion. Single-page layout (`src/app/page.tsx`) with a token-driven design system and a light/dark theme switcher.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server (Turbopack)
- `npm run build` — production build (Turbopack)
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Project structure

```
src/
  app/
    layout.tsx      root layout: fonts, metadata, ThemeProvider, Navbar/Footer
    page.tsx         page composition (Hero, About, Skills, Projects, Contact)
    globals.css       design tokens (brand/neutral scales, semantic tokens, dark mode)
  components/
    ui/               reusable UI kit (Button, Card, Badge, Section, Input, ThemeToggle, ...)
    Navbar.tsx, Hero.tsx, About.tsx, Skills.tsx, Projects.tsx, Contact.tsx, Footer.tsx
    theme-provider.tsx
  lib/
    motion.ts         shared framer-motion variants
    cn.ts              tiny classname-join helper
  data/
    projectData.ts    project content shown in the Projects section
```

## Design system

This project follows a strict design-token + UI-kit approach — no component should hardcode a raw color, radius, or one-off animation curve. See **[CLAUDE.md](./CLAUDE.md)** for the full token reference, UI kit catalog, and conventions for adding new sections. There's also a Claude Code project skill at `.claude/skills/design-system/` that encodes the same rules procedurally.

## Branch workflow

`master` is protected — no direct pushes. Changes land via PRs from `feature/PR-<n>-<description>` branches.

## Deployment

Deploys cleanly to [Vercel](https://vercel.com/new) or any Next.js-compatible host.
