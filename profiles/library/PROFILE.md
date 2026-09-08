# Profile: library

## Purpose

For reusable packages, SDKs, CLIs, standards/tooling repositories and shared modules consumed by other projects.

## Recommended boundaries

- public contract/API
- core implementation
- adapters/integrations when applicable
- schemas/templates/assets
- executable tooling
- tests/fixtures
- documentation

## Additional requirements

A conforming library SHOULD define, when applicable:

- public vs internal API boundaries;
- versioning and compatibility policy;
- deterministic inputs/outputs;
- consumer-facing examples;
- negative and positive tests;
- migration/deprecation guidance for breaking evolution.

## Quality gates

Minimum applicable set:

- STANDARD conformance
- tests for public contracts
- negative-path tests
- build/package verification when applicable
- security baseline
- documentation sync

## Allowed exceptions

Private internal tooling MAY omit publication/package-distribution machinery while it remains private, but must still keep version and consumer contract explicit.
