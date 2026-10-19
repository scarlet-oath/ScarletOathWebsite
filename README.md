# Scarlet Oath

Coming-soon landing site for Scarlet Oath (scarletoath.be).

## Stack

React 19, TypeScript, Vite 8, Tailwind CSS v4. Deployed to GitHub Pages.

No memoization (`memo`/`useMemo`/`useCallback`) — intentional: the render tree is small and static, so referential-equality optimizations add noise without measurable benefit.

## Commands

| Command                | Description                          |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Start the local dev server           |
| `npm run build`        | Build the production bundle          |
| `npm run preview`      | Preview the production build locally |
| `npm run lint`         | Run ESLint                           |
| `npm run lint:fix`     | Run ESLint with auto-fix             |
| `npm run format`       | Format files with Prettier           |
| `npm run format:check` | Check formatting with Prettier       |
| `npm run typecheck`    | Run the TypeScript compiler checks   |
| `npm test`             | Run the test suite                   |

## Deployment

GitHub Pages via `.github/workflows/deploy.yml` (manually triggered with workflow_dispatch). CI (lint, typecheck, test, build) runs on pushes to `core` and on pull requests via `.github/workflows/ci.yml`.
