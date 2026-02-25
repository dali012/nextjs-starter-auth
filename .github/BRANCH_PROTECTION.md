# Branch Protection Setup (GitHub)

Use this checklist to enforce merge quality on `main`.

## Target Branch

- Branch name pattern: `main`

## Required Rule Settings

In **GitHub → Settings → Branches → Add branch protection rule**:

1. **Require a pull request before merging**
2. **Require approvals**: at least `1`
3. **Dismiss stale pull request approvals when new commits are pushed**
4. **Require review from Code Owners** (recommended)
5. **Require status checks to pass before merging**
6. **Require branches to be up to date before merging**
7. **Require conversation resolution before merging**
8. **Do not allow force pushes**
9. **Do not allow deletions**

## Required Status Checks

Select these checks as required:

- `CI / Lint, Typecheck, Build`
- `PR Quality Automation / PR Metadata and Label Checks`

## Notes

- Do **not** require CD checks for merge; deployment may be intentionally
  skipped when deployment secrets are not configured.
- If this repo is used as a template, repeat this setup for each created
  repository.
