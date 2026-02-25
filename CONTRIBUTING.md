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
   provider keys if needed).
   ```

4. Start development server:

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
