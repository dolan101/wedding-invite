# Dolan & KANCHAN Wedding Invitation

Next.js 15 + TypeScript + Tailwind CSS + Framer Motion, with local ShadCN-style reusable UI primitives.

## Run
npm install
npm run dev

## RSVP database
Create a Supabase project, run `migrations/001_wedding.sql`, then set `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in `.env.local`. The service-role key is server-only and must never be exposed client-side.

## Personalized greeting
Share links such as `/?guest=Anita` or `/?name=Anita`.

## Music
Put the wedding soundtrack at `public/music/wedding.mp3`. The control is intentionally opt-in because browsers block autoplay.

## Netlify
Use the Netlify Next.js runtime/build preset. Build command: `npm run build`. Publish directory: `.next` (or let Netlify detect Next.js automatically).
