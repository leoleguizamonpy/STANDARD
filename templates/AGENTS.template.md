# AGENTS — {{PROJECT_NAME}}

## Authority

Automated agents MUST follow this order:

1. `FOUNDATION.md`
2. adopted STANDARD version/profile
3. accepted ADRs
4. repository policies and schemas
5. implementation conventions

## Required behavior

Agents MUST:

- inspect architecture before modifying code;
- preserve domain boundaries;
- avoid duplicate implementations and dead files;
- update documentation when behavior or architecture changes;
- run all applicable verification commands before declaring completion;
- use the repository branch/PR policy;
- report uncertainty instead of inventing requirements.

## Forbidden behavior

Agents MUST NOT:

- change product scope implicitly;
- bypass security or quality gates;
- introduce secrets;
- create parallel sources of truth;
- rewrite accepted ADR history;
- silently move responsibilities across domains;
- declare PASS when required verification has not run.

## Verification

```bash
{{VERIFY_COMMAND}}
```

Project-specific agent constraints may extend this file but MUST NOT weaken universal security or governance rules without a documented exception.
