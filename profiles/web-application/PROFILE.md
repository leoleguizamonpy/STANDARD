# Profile: web-application

## Purpose

For browser-facing applications with a UI and optional server/API layer.

## Recommended boundaries

- UI / presentation
- application/use-cases
- domain rules
- infrastructure/adapters
- tests

A monorepo MAY split web/API/packages; a single-app repository MAY keep them in one source tree when boundaries remain clear.

## Additional requirements

A conforming web application SHOULD define, when applicable:

- accessibility baseline;
- client/server trust boundaries;
- input validation;
- error states and loading states;
- responsive behavior;
- authentication/authorization boundaries;
- API contracts;
- build verification.

## Quality gates

Minimum applicable set:

- STANDARD conformance
- lint
- typecheck for typed stacks
- tests for critical behavior
- production build
- security baseline
- documentation sync

Accessibility and end-to-end gates SHOULD be enabled for user-critical flows.

## Allowed exceptions

Projects without a backend MAY omit server/application/infrastructure layers that have no real responsibility. Empty ceremonial layers are prohibited.
