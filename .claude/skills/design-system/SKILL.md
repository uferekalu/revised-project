---
name: design-system
description: Use this when adding or editing any UI in this portfolio (new sections, restyling existing ones, new components) to stay consistent with the token-driven design system — brand colors, UI kit, motion, and light/dark theming. Triggers on requests like "add a section", "style this", "new page", "change colors", or "add a component".
---

# Portfolio Design System

This site (Ufere Kalu's portfolio) was rebranded from an inconsistent, hardcoded-color mess into a single token-driven system. The #1 rule when touching UI here: **never hardcode a color, radius, shadow, or animation timing** — always pull from the tokens in `src/app/globals.css` or the shared helpers below. Reintroducing raw Tailwind stock colors (`cyan-500`, `indigo-600`, etc.) or one-off hex values is exactly the regression this system prevents.

## Brand

White + `#920af2` (violet). One identity everywhere: **Ufere Kalu**.

## Before writing any new UI

1. Read `src/app/globals.css` for the current token set (brand-50…950, neutral-0…950, semantic tokens: `background`, `surface`, `surface-elevated`, `foreground`, `muted`, `muted-foreground`, `border`, `primary`, `primary-foreground`, `ring`).
2. Check `src/components/ui/` for an existing primitive before writing new markup: `button.tsx`, `card.tsx`, `badge.tsx`, `container.tsx`, `section.tsx`, `section-heading.tsx`, `input.tsx`, `textarea.tsx`, `theme-toggle.tsx`.
3. Check `src/lib/motion.ts` for shared framer-motion variants (`fadeUp`, `fadeIn`, `scaleIn`, `staggerContainer`, `viewportOnce`, `hoverLift`) before writing new `containerVariants`/`itemVariants`.

## Building a new section

```tsx
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/motion";

<Section id="new-section" background="base"> {/* or "surface" | "brand" */}
  <SectionHeading eyebrow="..." title="..." subtitle="..." />
  {/* content using ui/ primitives + semantic tokens */}
</Section>
```

- Use semantic tokens (`bg-background`, `text-foreground`, `border-border`, `text-brand-600 dark:text-brand-400`, etc.) — these already flip correctly for light/dark, so most components need no explicit `dark:` handling.
- For a section that should always read as a dark "brand" moment regardless of site theme (like Projects/Contact currently), use `background="brand"` on `Section` — it's intentionally not tied to the light/dark toggle.
- Verify no horizontal scroll at 320–375px widths (mobile). `overflow-x: hidden` on `html, body` is a safety net, not a substitute for correct layout — decorative absolutely-positioned elements still need an `overflow-hidden` ancestor.

## Theming

Dark mode is `next-themes` with `attribute="class"` — never build a custom scroll-based or per-section theme detector (there used to be one via `IntersectionObserver` + `data-theme` attributes on the navbar; it was removed because it wasn't a real theme system). The toggle is `ThemeToggle` from `src/components/ui/theme-toggle.tsx`, already wired into `Navbar`.

## When a token genuinely doesn't exist yet

Add it to `src/app/globals.css` in the appropriate scale/section and document it in `CLAUDE.md` — don't inline a new hex value in a component.
