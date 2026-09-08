# Profile: static-web

## Purpose

For sites primarily composed of static HTML/CSS/JavaScript or statically generated content where no application server owns core business behavior.

## Recommended boundaries

- semantic content / pages
- shared visual tokens and base styles
- reusable components/layout patterns
- shared JavaScript runtime
- page-specific differences
- assets
- tests/verification

## Additional requirements

A conforming static web project SHOULD define, when applicable:

- shared style authority;
- duplicate-pattern extraction rules;
- accessibility baseline;
- responsive behavior;
- asset integrity;
- broken-reference checks;
- secret prohibition in client code;
- visual regression/parity strategy when refactoring an existing site.

## Quality gates

Minimum applicable set:

- STANDARD conformance
- HTML/reference integrity
- CSS/JavaScript syntax or lint checks
- accessibility baseline
- security baseline
- documentation sync
- production smoke verification

## Allowed exceptions

Projects without package/runtime tooling MAY use language-neutral scripts instead of Node package scripts, provided required gates remain reproducible and machine-verifiable where practical.
