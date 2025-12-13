# Next.js Starter

A modern, opinionated Next.js starter template packed with the latest
technologies and best practices to kickstart your web development journey.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Library:** [React 19](https://react.dev/)
- **Validation:** [Zod](https://zod.dev/)
- **Environment:** [@t3-oss/env-nextjs](https://env.t3.gg/)
- **Linting & Formatting:** ESLint, Prettier
- **Git Hooks:** Husky, Lint-staged, Commitlint

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed:

- [Bun](https://bun.sh/) (v1.0 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd nextjs-starter
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Start the development server:

   ```bash
   bun dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see
   the result.

## 📂 Project Structure

```text
.
├── src/
│   ├── app/          # Next.js App Router pages and layouts
│   ├── components/   # Reusable UI components
│   ├── env/          # Environment variable validation
│   └── ...
├── public/           # Static assets
├── .husky/           # Git hooks
├── ...
```

## 📜 Scripts

- `bun dev`: Runs the development server.
- `bun run build`: Builds the application for production.
- `bun start`: Starts the production server.
- `bun run lint`: Runs ESLint to check for code quality issues.
- `bun run format`: Formats the code using Prettier.
- `bun run prepare`: Sets up Husky git hooks.

## 🤝 Commit Convention

This project follows the
[Conventional Commits](https://www.conventionalcommits.org/) specification.

Format: `<type>(<scope>): <subject>`

**Types:**

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space,
  formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries such as
  documentation generation

Example: `feat(auth): add login page`

## ⚙️ Environment Variables

This project uses `@t3-oss/env-nextjs` for type-safe environment variables.
Define your environment variables in `.env` (or `.env.local`) and validate them
in `src/env/client.ts` and `src/env/server.ts`.
