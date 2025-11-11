# EvalAI Admin Starter (Next.js App Router + Tailwind + shadcn-ready)

A clean, responsive scaffold matching the EvalAI Admin Portal spec.
- Next.js App Router (RSC-first)
- Tailwind CSS + tokenized theme
- shadcn/ui ready (install step included)
- Core components: Sidebar variants, KPI cards, Responsive table→card swap
- Linting & structure aligned for scale

## Quickstart

```bash
pnpm create next-app@latest . --ts --eslint --tailwind --app
# overwrite files with this starter (already done from zip)
pnpm add class-variance-authority tailwind-merge lucide-react next-themes zod react-hook-form
pnpm dlx shadcn-ui@latest init -d
pnpm dlx shadcn-ui@latest add button input card dialog drawer sheet dropdown-menu tabs badge switch tooltip table select slider toast textarea label skeleton separator avatar progress
pnpm dev
```

(Optional) Bundle analyzer:
```bash
pnpm add -D @next/bundle-analyzer
```

## Structure
- `app/(app)` protected area with layout + example pages
- `components/layout` responsive header/sidebar
- `components/core` reusable atoms/molecules (KpiCard, ResponsiveTable)
- `lib` utilities
- `styles/globals.css` tokenized theme

Update tokens in `tailwind.config.ts` and `styles/globals.css` to sync with Figma variables.
# EvalAI
