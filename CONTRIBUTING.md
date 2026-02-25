# Contributing

Thanks for your interest in contributing to this Next.js starter.

## Prerequisites

- Node.js `24.13.0` (see `.nvmrc`)
- Bun (latest stable)
- PostgreSQL database (local Docker or hosted)

## Getting Started

1. Fork the repository and clone your fork.
2. Install dependencies:

   ```bash
   bun install
   ```

3. Create your local env file:

   ```bash
   cp .env.example .env
   ```

4. Set required env vars in `.env` (`DATABASE_URL`, `BETTER_AUTH_SECRET`, auth
   provider keys if needed).

5. Start development server:

   ```bash
   bun run dev
   ```

## Development Workflow

1. Create a feature branch from `main`.
2. Make focused changes with clear commit history.
3. Run checks locally before opening a PR.
4. Open a pull request against `main`.

## Quality Checks

Run these before submitting:

```bash
bun run lint
bunx tsc --noEmit
bun run build
```

If you change database schema or migrations, also run the relevant Drizzle
commands:

```bash
bun run db:generate
bun run db:migrate
```

## Commit Message Convention

This repository uses Commitlint with Conventional Commits.

Examples:

- `feat(auth): add passkey support`
- `fix(ui): correct spinner stroke width typing`
- `docs(readme): update setup section`

## Pull Request Guidelines

- Keep PRs scoped to one change set.
- Add or update docs when behavior/config changes.
- Include screenshots/GIFs for UI changes.
- Mention any breaking changes clearly.
- Ensure no secrets are committed.

## PR Automation Checks

Pull requests are automatically validated by `.github/workflows/pr-quality.yml`.

Required:

- PR title must follow Conventional Commits (for example:
  `feat(auth): add passkey UI`).
- PR description must include `## Summary` and `## Testing` sections.

Automation also:

- Applies a PR size label (`size/XS`, `size/S`, `size/M`, `size/L`, `size/XL`).
- Posts an updated quality report comment on the PR.

Use `.github/pull_request_template.md` to satisfy these checks quickly.

## Hooks

- `pre-commit` runs `lint-staged`
- `commit-msg` runs `commitlint`

If hooks do not run automatically, execute:

```bash
bun run prepare
```

## Reporting Security Issues

Please do not open public issues for security vulnerabilities. Report them
privately to the repository owner.
