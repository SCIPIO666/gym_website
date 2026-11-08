# The Legends Fitness — Next.js site

Static portfolio showcase built with Next.js 16 (App Router), React 19, and TypeScript. Plain CSS in `src/app/globals.css` (ported from the wireframe).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

Requires Node 20.9+.

## Where things live

- `src/lib/site.ts` — internal timetable route, optional WhatsApp URL and socials, maps link
- `src/components/` — one component per section, `Nav` and `RevealObserver` are client components
- `public/videos/` — drop `hero.mp4` (and optionally `hero.webm`) here for the hero background

## Notes

- `npm run build` creates a static site in `out/` for Vercel deployment. There are no API routes, database clients, or server actions.
- Booking, membership purchase, member login, and the unconfigured WhatsApp contact are inactive in showcase mode.
- Fonts load via `next/font/google` (Manrope, Instrument Serif, Space Mono) and need internet on first build.
