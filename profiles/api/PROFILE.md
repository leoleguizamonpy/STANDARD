# Profile: api

## Purpose

For HTTP, RPC, event-driven or service APIs where the primary product surface is a programmatic interface.

## Recommended boundaries

- transport/interface adapters
- application/use-cases
- domain rules
- contracts/schemas
- infrastructure/adapters
- persistence when applicable
- tests

## Additional requirements

A conforming API SHOULD define, when applicable:

- request/response contracts;
- validation at trust boundaries;
- authentication and authorization;
- error model;
- idempotency rules for retryable operations;
- pagination/filtering conventions;
- rate limiting/abuse controls;
- API/version compatibility policy;
- observability and correlation identifiers.

## Quality gates

Minimum applicable set:

- STANDARD conformance
- lint
- typecheck for typed stacks
- unit/integration tests for critical contracts
- build/startup verification
- security baseline
- documentation sync

Contract tests SHOULD protect externally consumed interfaces.

## Allowed exceptions

Small internal APIs MAY omit heavyweight compatibility machinery when consumers and lifecycle are tightly controlled, but the exception must not weaken security boundaries.
