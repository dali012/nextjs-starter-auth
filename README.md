# Next.js Auth Starter

A production-ready starter for shipping auth-first SaaS with Next.js App Router,
Better Auth, Drizzle, and shadcn/ui. Opinionated defaults, easy theming, and
typed helpers so you can focus on product.

## Stack

- Next.js App Router (TypeScript)
- Better Auth (email, magic links, OAuth-ready)
- Drizzle ORM + PostgreSQL
- shadcn/ui on Tailwind CSS v4
- Radix primitives, class-variance-authority utilities

## Features

- Drop-in auth routes: sign-in, sign-up, magic link, OAuth, account
- Session-aware layouts and guarded routes
- Themed auth UI via CSS tokens; light/dark ready
- Drizzle migrations and typed database access
- Client + server helpers for redirects and session handling

## Quickstart

```bash
bun install        # or pnpm install
docker compose up  # or point DATABASE_URL to Postgres
bun dev            # start the app
```

Then open <http://localhost:3000> and try `/auth/sign-in`.

## Environment

Copy `.env.example` to `.env.local` and set:

- `DATABASE_URL` — Postgres connection string
- `NEXT_PUBLIC_APP_URL` — e.g. <http://localhost:3000>
- `BETTER_AUTH_SECRET` — strong random string
- `OAUTH_*` — per provider (id/secret)

## Routes

- `/` landing
- `/docs` documentation
- `/auth/sign-in`, `/auth/sign-up` auth flows
- `/account` session-protected area

## Provider wiring

Auth UI is provided via `AuthUIProvider` with custom navigate/replace and Link
wrappers. See
[src/components/providers/better-auth-ui.tsx](src/components/providers/better-auth-ui.tsx).

## Theming

Edit CSS tokens in [src/app/globals.css](src/app/globals.css) to change colors,
radius, and typography. shadcn/ui components inherit these values.

## Scripts

- `bun dev` — run locally
- `bun lint` — lint
- `bun typecheck` — types
- `bun db:push` — run Drizzle migrations (adjust to your script name)

## Project structure

- `src/app` — routes (landing, docs, auth, account)
- `src/components` — UI primitives, providers
- `src/lib` — auth client/server helpers
- `drizzle/` — migrations

## Docs

A styled docs page lives at [src/app/docs/page.tsx](src/app/docs/page.tsx).
Start there for setup steps, routing, customization, and FAQs.

## Deploying

1. Set env vars on your host (Vercel, Fly, Render). 2) Run migrations
   (`drizzle kit push` or your script). 3) Deploy as a standard Next.js app.

## License

MIT.
