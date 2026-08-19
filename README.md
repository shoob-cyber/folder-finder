# NEXUS BIOTECH

> A cinematic, high-performance landing page for a precision medicine / cellular intelligence platform.

**Live preview:** [https://folder-finder.vercel.app/](https://folder-finder.vercel.app/))

---

## What this is

Nexus Biotech is a marketing landing page concept built around a "cyber-biotech" visual language: deep obsidian surfaces, bio-mint accents, glassmorphic cards, and telemetry-style UI details. It was designed to feel closer to a real enterprise biotech product page than a generic portfolio template.

The page is intentionally front-end heavy. It focuses on scroll-driven storytelling, WebGL visuals, and polished micro-interactions rather than a backend or CMS.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | [TanStack Start](https://tanstack.com/start) (React 19 + SSR-ready file routing) |
| Language | TypeScript 5.8 |
| Styling | Tailwind CSS 4 with custom `@theme` tokens and CSS utilities |
| Animation | GSAP + ScrollTrigger, Framer Motion |
| 3D | React Three Fiber + Drei + Three.js |
| Smooth scroll | Lenis |
| Icons | Lucide React |
| Notifications | Sonner |
| Package manager | Bun (lockfile included) |

## Key features

- **Custom telemetry crosshair cursor** — hides the default cursor on desktop and follows the pointer with a mint target ring + live X/Y readout. Expands on interactive elements.
- **Scroll-linked 3D DNA helix** — a React Three Fiber particle double-helix that rotates, untwists, and tilts as the user scrolls. Includes a live FPS telemetry badge.
- **Horizontal-scroll pinned pillars** — GSAP ScrollTrigger pins the section on desktop and translates three capability cards horizontally while metrics count up.
- **Mouse-following spotlight borders** — tech matrix cards reveal a radial gradient border that tracks cursor position via CSS custom properties.
- **Trust bar marquee** — infinite-scrolling partner/research badge strip with edge fades.
- **Demo drawer** — slide-over form triggered from multiple CTAs with Sonner toast confirmation.
- **Accessibility** — skip link, `prefers-reduced-motion` fallbacks, semantic landmarks, focus-visible rings, and ARIA labels on the 3D canvas.

## Getting started

### Requirements

- [Bun](https://bun.sh) (recommended) or Node.js 20+
- A modern browser with WebGL support

### Install

```bash
# Clone the repo
git clone <repository-url>
cd nexus-biotech

# Install dependencies
bun install

# Or with npm
npm install
```

### Development

```bash
bun run dev
```

The dev server starts at `http://localhost:8080` by default.

### Build

```bash
bun run build
```

For a development-mode build (useful for previewing SSR behavior):

```bash
bun run build:dev
bun run preview
```

### Lint and format

```bash
bun run lint
bun run format
```

## Project structure

```text
src/
  components/
    Chrome/          # Global chrome: cursor, scroll progress, navbar
    Hero/            # Hero section + 3D helix visual
    Innovation/      # Feature narrative section
    Pillars/         # GSAP pinned horizontal-scroll cards
    Technology/      # Tech matrix with spotlight cards
    Capabilities/    # Workflow pipeline section
    Statistics/      # Metric counters
    CTA/             # Final call-to-action
    Footer/          # Themed footer + telemetry strip
    Modal/           # Demo request drawer
    Trust/           # Marquee trust bar
    ui/              # shadcn/ui primitives
  hooks/             # Reusable hooks (count-up, spotlight, etc.)
  lib/               # Utility functions
  routes/            # TanStack Start routes
  styles.css         # Tailwind theme + custom utilities
```

## Design tokens

The visual identity is built on a small, consistent palette defined in `src/styles.css`:

| Token | Hex | Usage |
| --- | --- | --- |
| Dark void | `#070b09` | Page background |
| Dark card | `#0d1410` | Card surfaces |
| Bio mint | `#00f5a0` | Primary accent, glow, cursor |
| Cyan glow | `#00d2ff` | Secondary accent, helix strand B |
| Muted sage | `#8a9a93` | Body text, secondary copy |
| Border green | `#164034` | Subtle borders and dividers |

Typography uses **Sora** for display headlines, **Manrope** for body copy, and **JetBrains Mono** for telemetry/metadata.

## Performance notes

- The 3D helix is lazy-loaded behind `ClientOnly` so it never runs during SSR.
- Canvas is rendered at a max DPR of 1.75 to keep fragment work reasonable on high-density displays.
- GSAP ScrollTrigger is loaded dynamically inside `useEffect` to avoid bundling it into the initial SSR payload.
- Lenis is disabled when `prefers-reduced-motion: reduce` is active.
- The custom cursor is disabled on touch / coarse-pointer devices.

## Known limitations / next steps

- This is a single-page landing page. There is no backend, auth, or CMS integration yet.
- Form submissions in the demo drawer are client-side only (toast confirmation). A real implementation would POST to an API route or CRM.
- The 3D helix intentionally uses a CPU-updated `BufferAttribute` each frame for the untwist effect. It holds 60 fps on modern desktops but may be replaced with a vertex shader for lower-end devices.
- Mobile gets a stacked vertical layout instead of the horizontal pin.

## Deployment

This project is configured for Lovable's managed preview/publish flow. You can also deploy the production build to any host that supports Node-like or edge runtimes compatible with TanStack Start / Nitro.

## License

MIT — feel free to fork and adapt for your own projects. Attribution appreciated but not required.

---

Built with attention to detail by the Nexus Biotech frontend team.
