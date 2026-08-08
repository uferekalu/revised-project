# CLAUDE.md

Guidance for Claude Code (or any collaborator) working in this repository.

## What this is

Ufere Kalu's personal portfolio: a single-page Next.js 15 (App Router) site at `src/app/page.tsx`, composed of `Hero`, `About`, `Skills`, `Projects`, `Contact` (plus global `Navbar`/`Footer` in `layout.tsx`). Stack: React 19, TypeScript, Tailwind CSS v4 (CSS-first config, no `tailwind.config.*`), framer-motion, `next-themes`.

**Brand**: white + `#920af2` (violet). One name everywhere: **Ufere Kalu**. Never reintroduce "Lusak/Lushak Communication" or "Ufere Dev" — those were a past inconsistency, now fixed.

## Design tokens — the rule

**Never use a raw Tailwind stock color (`cyan-500`, `indigo-600`, `#0f172a`, etc.) or a one-off hex in a component.** Every color, radius, shadow, and motion timing comes from the tokens defined once in `src/app/globals.css`.

- **Brand scale**: `brand-50` … `brand-950`, anchored at `brand-500 = #920af2`. Use for accents, links, active states, glows.
- **Neutral scale**: `neutral-0` … `neutral-950`, violet-tinted for cohesion with the brand.
- **Semantic tokens** (what components should actually reach for): `background`, `surface`, `surface-elevated`, `foreground`, `muted`, `muted-foreground`, `border`, `primary`, `primary-foreground`, `ring`. These flip automatically between light/dark — components using them need no `dark:` variants for basic surfaces/text.
- **Radius**: `--radius-sm/md/lg/xl/2xl` → use as `rounded-[var(--radius-md)]` etc.
- **Shadow**: `--shadow-sm/md/lg/glow`.
- **Motion**: shared variants live in `src/lib/motion.ts` (`fadeUp`, `fadeIn`, `scaleIn`, `staggerContainer`, `viewportOnce`, `hoverLift`). Import these instead of redefining `containerVariants`/`itemVariants` per component — that duplication is exactly what made the pre-rebrand animations feel inconsistent section to section.

If a new color genuinely doesn't fit the existing scales (rare — e.g. a semantic red for form errors), add it as a token in `globals.css` and document it here rather than inlining a hex in a component.

## UI kit (`src/components/ui/`)

Reach for these before writing new markup:

| Component | Use for |
|---|---|
| `button.tsx` | Any CTA/action — supports `variant` (primary/secondary/outline/ghost), `size`, and renders as `<a>` when given `href` |
| `card.tsx` | Any elevated content block (skill groups, project cards, contact cards) |
| `badge.tsx` | Pills/chips/filters (skill tags, category toggles) |
| `container.tsx` | `max-w-7xl mx-auto px-6` wrapper — don't hand-roll this per section |
| `section.tsx` | Page section wrapper — handles vertical rhythm + `background` variant (`base`/`surface`/`brand`) |
| `section-heading.tsx` | Eyebrow + title + subtitle pattern used at the top of every section |
| `input.tsx` / `textarea.tsx` | Form fields, token-styled focus ring |
| `theme-toggle.tsx` | The light/dark switcher (already placed in `Navbar`) |

## Theme system

`next-themes` (`attribute="class"`, `defaultTheme="system"`, `enableSystem`) wraps the app in `src/components/theme-provider.tsx`, mounted in `layout.tsx`. Dark mode is class-based (`.dark` on `<html>`), wired into Tailwind v4 via `@custom-variant dark (&:where(.dark, .dark *));` in `globals.css`. `<html>` has `suppressHydrationWarning` (required by `next-themes`). Toggle lives in `Navbar` via `ThemeToggle`.

Do not reintroduce the old per-section `data-theme` + `IntersectionObserver` pattern that used to fake a "theme" in the navbar — it was never a real light/dark system, just nav-text recoloring based on scroll position. The real system replaced it entirely.

## Adding a new section

1. Wrap it in `<Section id="..." background="base|surface|brand">`.
2. Start with `<SectionHeading eyebrow title subtitle />`.
3. Build content with the UI kit above; use semantic tokens for anything custom.
4. Animate with `src/lib/motion.ts` variants, not new one-off `containerVariants`.
5. Check it at 320–375px width — no section should introduce horizontal scroll (`html, body { overflow-x: hidden }` is a safety net in `globals.css`, not a substitute for correct layout).

## Content

`Projects.tsx` reads from `src/data/projectData.ts` — add new projects there, not by editing the component.

## Commands

- `npm run dev` — dev server (Turbopack)
- `npm run build` — production build (Turbopack)
- `npm run lint` — ESLint

## Git workflow

`master` is protected — no direct pushes. Work happens on `feature/PR-<n>-<description>` branches, merged via PR.
