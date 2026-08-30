# AAM Connect

React + TypeScript + Vite web app for AAM (Aayushman Arogya Mandir) meeting
coordination — CHO/ANM/ASHA health workers. Hindi by default, with an
English toggle. Runs entirely as a self-contained demo: no backend, no
environment variables, no external services.

## Setup

1. `npm install`
2. `npm run dev` to run the app locally.

Sign in with any 10-digit mobile number, then the fixed demo code shown on
screen (`123456`).

## Building for production

```bash
npm run build
npm run preview
```

The static site is output to `dist/`.

## Deploying to Render

This repo includes a [render.yaml](render.yaml) for Render's static-site
service. In the Render dashboard: New → Blueprint → point at this repo.
No environment variables are needed. The build runs `npm ci && npm run build`
and serves `dist/`, with an SPA rewrite so any path falls back to
`index.html`.

## Notes

- `supabase/migrations/0001_profiles.sql` is a dormant schema kept for a
  possible future real auth backend — it is not used by the app today.
- Rewards in the app are earned by the sector-level AAM team, not by
  individual workers; see `src/pages/TeamPerformancePage.tsx`.
