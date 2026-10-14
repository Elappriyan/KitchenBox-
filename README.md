# KitchenBox.lk

Bilingual English and Tamil landing page for home-cooked lunch delivery in Jaffna Town.

## Run locally

```bash
npm install
npm run dev
```

The page is available at `http://localhost:3000`.

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Project notes

- Next.js App Router, TypeScript, React, and Tailwind CSS v4. `npm run build` produces a static export in `out/`.
- English and Tamil interface dictionaries live in `src/locales/` and share the same keys.
- The selected language is stored in local storage and defaults to English.
- `public/logo.png` is the supplied transparent brand logo.
- Food photography is AI-generated, saved as optimized JPEG assets, and illustrative.
- WhatsApp orders open a pre-filled message to +94 76 965 6552. The page does not collect orders or show prices.
