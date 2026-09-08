# STANDARD v1 — DEVELOPMENT CHECKLIST

Objetivo: cerrar una primera versión utilizable, verificable y certificable de STANDARD.

Regla: `[x]` significa evidencia implementada y validada. La certificación formal se vincula a revisiones exactas y no se hereda automáticamente a commits posteriores.

## FASE 0 — Bootstrap — PASS
- [x] Repositorio, README, FOUNDATION, AGENTS, VERSION y CHANGELOG.
- [x] Arquitectura lógica/física inicial.
- [x] `develop` establecido para STANDARD.

## FASE 1 — Gobernanza — PASS
- [x] autoridad scoped-by-responsibility.
- [x] MUST / SHOULD / MAY.
- [x] excepciones, ADR, SemVer, deprecación y migración.
- [x] source authority machine-readable.

## FASE 2 — Repositorio y Git — PASS
- [x] `main` stable/certified.
- [x] `mainline` y `develop` flows.
- [x] ramas/prefixes, Conventional Commits, PR, merge y release policy.
- [x] PR template y repository hygiene.

## FASE 3 — Documentación — PASS
- [x] documentos obligatorios y autoridad documental.
- [x] synchronization + anti-duplication.
- [x] README / FOUNDATION / AGENTS / ADR templates.

## FASE 4 — Arquitectura — PASS
- [x] domain ownership y dependency direction.
- [x] cycle prohibition y false-shared-abstraction rule.
- [x] core/domain/application/infrastructure/interface guidance.
- [x] machine-readable architecture policy.

## FASE 5 — Perfiles v1 — PASS
- [x] `web-application`.
- [x] `api`.
- [x] `static-web`.
- [x] `library`.
- [x] perfiles no implementados bloqueados por schema/bootstrap.

Diferidos:
- [ ] `saas`.
- [ ] `ai-system`.

## FASE 6 — Contrato de adopción — PASS
- [x] `project.standard.yml`.
- [x] JSON Schema draft 2020-12.
- [x] versión, perfil, metadata, Git flow y excepciones.
- [x] AJV 2020 + YAML.
- [x] STANDARD adopta su propio contrato.

## FASE 7 — Seguridad — PASS BASELINE
- [x] secretos / env rules.
- [x] dependency hygiene.
- [x] trust-boundary validation.
- [x] auth/authz applicability.
- [x] safe errors/logs.
- [x] P0/P1 blockers.
- [x] basic sensitive-file verifier.

## FASE 8 — Calidad — PASS
- [x] definition of done.
- [x] applicable lint/typecheck/test/build model.
- [x] architecture/documentation/security gates.
- [x] no arbitrary universal coverage target.
- [x] P0/P1/P2/P3 severity.
- [x] exact-HEAD certification.
- [x] IMPLEMENTED / TESTED / INTEGRATED / CERTIFIED distinction.

## FASE 9 — Verificador — PASS
- [x] Node runtime.
- [x] `pnpm standard:verify`.
- [x] required files, YAML, schema, VERSION consistency.
- [x] PASS/FAIL + exit codes.
- [x] first CI defect detected and corrected.
- [x] integration HEAD `2ae992ff59d45da81b3025ba86dc83f51820c37a` PASS.

## FASE 10 — Bootstrap — PASS
- [x] `pnpm bootstrap`.
- [x] profile selection.
- [x] documentation + adoption contract generation.
- [x] default mainline flow.
- [x] refuses non-empty destination.
- [x] generated project re-verified automatically.

## FASE 11 — CI — PASS
- [x] GitHub Actions workflow.
- [x] push/PR triggers.
- [x] conformance + self-tests.
- [x] failure propagation proven.
- [x] integration CI PASS.
- [x] release candidate `6bec35740a67f1b650037b84b65f3a3cf9ee5bbb` PASS.
- [x] post-merge `main` `4b5c2ad1ba7e94fef46af8d088b34b812253d5d4` PASS.

## FASE 12 — Ecosystem Audit — PASS
- [x] TOURNA.
- [x] ACTIO.
- [x] LEOLEGUIZAMON.
- [x] SEOT.
- [x] BrandADN.
- [x] common/difference matrix.
- [x] product-specific rules excluded.
- [x] Git-flow assumption corrected.
- [x] flat-authority assumption corrected.
- [x] exact-revision certification extracted.

## FASE 13 — Dogfooding — PASS
- [x] STANDARD self-adoption.
- [x] valid fixture PASS.
- [x] invalid fixture FAIL.
- [x] generated fixture PASS.
- [x] repeated successfully in release and post-merge CI.

## FASE 14 — v1.0.0 Certification — PASS
- [x] five-project audit.
- [x] contradiction corrections applied.
- [x] `VERSION = 1.0.0`.
- [x] package/adoption/bootstrap/self-tests aligned to `1.0.0`.
- [x] CHANGELOG release entry.
- [x] release PR #2 CI PASS on exact HEAD.
- [x] no observed P0/P1 blockers after release CI.
- [x] release candidate merged with `expected_head_sha` protection.
- [x] post-merge `main` verification PASS.
- [x] certification evidence documented.

**Gate final: STANDARD v1.0.0 CERTIFIED.**

# Five required capabilities

1. **Specify** — PASS.
2. **Declare** — PASS.
3. **Generate** — PASS.
4. **Verify** — PASS.
5. **Enforce** — PASS.

# Next evolution

Items deliberately outside the v1.0.0 certification scope:

- `saas` profile;
- `ai-system` profile;
- automatic version migration;
- advanced stack-specific architecture scanners;
- published package/CLI distribution;
- advanced generators by stack;
- stronger dependency reproducibility through a committed lockfile/frozen install policy.
