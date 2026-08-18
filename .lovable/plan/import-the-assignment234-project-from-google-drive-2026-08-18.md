# Import the Assignment234 project from Google Drive

Bring the Drive project (a single-page animated marketing site) into this app so it renders at `/`.

## What's in the Drive project

- One page composed of sections: Navigation, Hero, Capabilities, Technology, Statistics, Innovation, CTA, Footer, plus a Modal
- Hooks: `useCountUp`, `useParallax`, `useMotionPreference`
- Lib: `animationConfig`, `breakpoints`, `colors`
- Styles: `index.css`, `App.css`, `styles/globals.css`, `styles/animations.css`, `styles/variables.css`
- Assets: `hero.png`, `react.svg`, `vite.svg`
- Libraries used: GSAP + @gsap/react, framer-motion, three + @react-three/fiber + @react-three/drei, lenis (smooth scroll), canvas-confetti, lucide-react

## Import steps

1. Download every source file, style, and asset from the Drive folder (skip `node_modules`, `dist`, lockfile, and the old build configs).
2. Install the missing packages: gsap, @gsap/react, framer-motion, three, @react-three/fiber, @react-three/drei, lenis, canvas-confetti, clsx/tailwind-merge (already present).
3. Copy `src/components/*`, `src/hooks/*`, `src/lib/*` and `src/assets/*` into this project, keeping folder names.
4. Port the styling: the Drive project uses Tailwind v3 with `tailwind.config.js`; this project uses Tailwind v4. Its design tokens (colors, fonts, custom animations) get translated into `src/styles.css` `@theme` tokens, and the CSS files are merged in so the visual result matches. Fonts loaded via a `<link>` in the root route.
5. Replace the placeholder `src/routes/index.tsx` with the page that `App.tsx` rendered, keeping the same section order, and add proper page title/description metadata.

## Technical notes

- This app is server-rendered, while the Drive project was browser-only. Anything touching `window` or WebGL — the three.js canvas, Lenis smooth scroll, parallax, confetti — is loaded client-side only (dynamic import behind a client-only boundary / inside `useEffect`) so the page doesn't crash during server render.
- `main.tsx`, `index.html`, `vite.config.ts`, `postcss.config.js`, `tailwind.config.js`, `tsconfig.*`, `.oxlintrc.json` are not imported; this project already has its own equivalents.
- Old routing-free `App.tsx` becomes the index route component.
- Image assets are imported as ES module imports rather than referenced from `public/`.

## Result

`/` renders the full Assignment234 landing page with its animations, on this project's stack.
