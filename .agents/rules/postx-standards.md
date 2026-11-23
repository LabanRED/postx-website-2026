# PostX Website Standards & Design System Guidelines

## Brand Palette & CSS Variables
- **Primary Color**: `#00A5C5` (Tailwind token: `primary`, CSS var: `--primary` / `--color-primary`)
- **Secondary Color**: `#2C8799` (Tailwind token: `secondary`, CSS var: `--secondary` / `--color-secondary`)
- **Font Family**: `Poppins` (via local `@fontsource/poppins`), desktop body font size `14px` for buttons.

## Button Component Specifications (`src/style.css`)
All buttons must use the `.btn` base class combined with one of the predefined variant classes:
- **Base class (`.btn`)**:
  - Border radius: `9999px` (fully rounded pill).
  - Font: `Poppins`, `font-size: 14px`, `font-weight: 500`.
  - Mobile padding: `16px 40px` (height 16px, width 40px).
  - Desktop padding (`md:` and above): `16px 24px` (height 16px, width 24px).
  - Line height: `1`, inline-flex, centered.

- **Variants**:
  1. `.btn-primary`: Black background (`#000000`), white text (`#ffffff`). Hover: Primary cyan (`#00A5C5`), white text.
  2. `.btn-secondary`: Primary cyan background (`#00A5C5`), white text (`#ffffff`). Hover: Secondary cyan (`#2C8799`), white text.
  3. `.btn-primary-outline`: Transparent background, black text, `1.5px solid #000000`. Hover: Black background (`#000000`), white text.
  4. `.btn-tertiary`: White background (`#ffffff`), black text (`#000000`), subtle border and card shadow (`0 4px 14px rgba(0, 0, 0, 0.08)`). Hover: `#f1f5f9`, black text.

## Navbar & Layout Conventions
- Standard Header (`src/components/header/Header.vue`) uses the floating black capsule style (`max-w-[1600px]`, `h-16 md:h-20 lg:h-24`, `rounded-full bg-black border border-white/10 shadow-2xl`, `text-neutral-300` links, `md` desktop/mobile breakpoint) with dropdown support for Services, Blogs, About, and CTA button.
- **Local-Only Device Preview Toggle**: The Desktop (`1280px`), Tablet (`768px`), Mobile (`390px`), and `Auto` toggle in `Header.vue` must only render when `isLocal` is true (`import.meta.env.DEV` or `localhost` / `127.0.0.1` / `.local` in `src/composables/useDevicePreview.js`).
- **Whole-Website Viewport Scaling**: Selecting a device mode must resize the entire website container in `src/App.vue` (Header, `<main>`, and Footer) rather than only the header.

## Build & Environment Invariants
- Dev server and preview server must run on **Port 3000** (`vite.config.js`).
- Build command must trigger the automatic patch version increment script (`scripts/bump-version.js` via `"prebuild": "node scripts/bump-version.js"` in `package.json`).

