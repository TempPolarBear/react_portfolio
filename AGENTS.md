
# AGENTS.md

## 1. Project Context

This is a personal portfolio project built as part of a Front-End development learning process.

### Technology Stack

- React 19
- TypeScript 6
- Vite 8
- React Router 8
- Bootstrap 5
- Bootswatch
- ky for HTTP requests
- Swiper
- AOS
- Font Awesome
- Lightbox libraries

Use only technologies and dependencies that already exist in the project unless adding something is explicitly requested.

Before using a library API, check the installed version in `package.json` and `package-lock.json`. Use the official documentation for that version. Do not assume that an API from another version is available.

## 2. Priority of Principles

When making technical decisions, follow this priority:

1. Preserve existing functionality.
2. Prefer readability and simplicity.
3. Follow the existing project architecture and conventions.
4. Use appropriate TypeScript and React practices.
5. Apply SOLID principles when they solve an actual design problem.

Do not introduce abstractions, patterns, or complexity just to follow a principle.

React components should primarily use the functional and declarative approach. Do not introduce class components or object-oriented patterns unless there is a clear reason.

## 3. Code Quality

- Write readable, simple, and maintainable code.
- Prefer straightforward solutions over clever or overly abstract implementations.
- Keep components and functions focused on a clear responsibility.
- Use clear and consistent naming.
- Avoid unnecessary duplication.
- Do not introduce unnecessary dependencies.
- Preserve the existing project structure and naming conventions.

### TypeScript

- Avoid `any`. Use specific types whenever possible.
- Use `unknown` when the type of external or untrusted data is not known, then narrow or validate it before use.
- Explicitly type component props and important function parameters.
- Define types for API responses based on the actual response structure.
- Use interfaces and type aliases where they improve clarity.
- Do not add complicated generics when a simpler type is sufficient.
- Avoid unnecessary type assertions and non-null assertions.

### React

- Follow the Rules of Hooks.
- Use `useEffect` for synchronization with external systems, subscriptions, and cleanup when necessary.
- Do not use effects unnecessarily for derived values or logic that belongs in event handlers.
- Keep component state as simple as possible.
- Avoid unnecessary re-renders and premature optimization.
- Follow the existing component and file naming conventions.

### Code Organization

- Extract repeated meaningful values into constants, such as API URLs, timeouts, limits, and configuration keys.
- Do not extract one-time values into constants without a readability or maintenance benefit.
- Group related logic into clear sections.
- Prefer named functions when nested callbacks make the code difficult to read.
- Avoid deeply nested conditions and callback chains.

## 4. Learning and Collaboration

The project belongs to a developer who is still learning React and TypeScript.

- Keep solutions appropriate for a Junior Front-End Developer.
- Prefer concepts and techniques that the developer can reasonably understand and maintain.
- Do not introduce advanced patterns or complex abstractions without explaining why they are needed.
- Explain significant changes in simple terms.
- When a task is educational, guide the developer through the reasoning instead of automatically replacing their work with a complete solution.
- When several valid approaches exist, briefly explain the trade-offs and recommend the simplest suitable option.
- Do not hide important implementation details behind unnecessary abstractions.

## 5. Working with Existing Code

- Do not rewrite working code unless explicitly requested or required to fix a demonstrated problem.
- Do not rename existing files, folders, components, functions, or variables without permission.
- Do not change the architecture or reorganize folders without discussing it first.
- Do not modify unrelated files.
- Preserve existing functionality and user changes.
- Before making a change, inspect the relevant component and its dependencies.
- Keep changes small and focused.
- Do not replace an existing implementation with a different library or approach without a clear reason.

## 6. API and External Requests

- Use the existing `ky` HTTP client and project API utilities where appropriate.
- Follow the existing approach to error handling, loading states, and request cancellation.
- Do not duplicate API configuration or request logic unnecessarily.
- Define response types based on actual API data.
- Handle possible request failures and unexpected responses.
- Never invent API endpoints, response fields, or library methods.

## 7. Git and Security

- Never commit `.env` files, credentials, API keys, access tokens, or other secrets.
- Do not expose secrets in source code, logs, comments, or documentation.
- Never run `git reset --hard`, force push, or other destructive Git commands without explicit permission.
- Do not delete, overwrite, or discard existing user changes.
- Do not amend commits, rebase, or rewrite Git history without permission.
- Before staging or committing, inspect `git status` and review the changes.
- Do not commit or push unless explicitly requested.

## 8. Workflow

- Work step by step.
- Inspect the relevant files before editing.
- If the task or expected behavior is unclear, ask for clarification before making assumptions.
- If a change affects architecture, public interfaces, or multiple unrelated components, discuss the approach first.
- Explain the purpose of significant changes.
- Do not make unrelated improvements while completing a specific task.

After making changes, run the available project checks:

1. `npm run lint`
2. `npm run build`

If a check fails, inspect and report the actual error.
If a check cannot be executed, state that clearly.
Never claim that the project works correctly if the checks have not been completed successfully.

There is currently no test script in `package.json`. Do not claim that automated tests were run unless a test setup is added and executed.

## 9. Language

- Use English for code identifiers, filenames, and technical naming.
- Follow the existing language conventions in comments and user-facing project content.
- Do not translate or rewrite existing content unless requested.
- Explain changes and technical decisions to the developer in Russian.
