# STANDARD v1 — DEVELOPMENT CHECKLIST

Objetivo: cerrar una primera versión utilizable, verificable y certificable de STANDARD.

Regla: `[x]` significa evidencia implementada en repositorio. Un gate que depende de CI no se considera certificado hasta observar su ejecución PASS.

## FASE 0 — Bootstrap — COMPLETE

- [x] Repositorio creado.
- [x] `README.md`.
- [x] `FOUNDATION.md`.
- [x] `AGENTS.md`.
- [x] `VERSION = 0.1.0`.
- [x] `CHANGELOG.md`.
- [x] arquitectura lógica/física inicial.
- [x] `develop` creado para STANDARD.

**Gate 0: PASS.**

## FASE 1 — Gobernanza — COMPLETE

- [x] autoridad scoped-by-responsibility.
- [x] MUST / SHOULD / MAY.
- [x] excepciones.
- [x] ADR policy.
- [x] SemVer.
- [x] deprecación.
- [x] migración explícita.
- [x] source authority policy machine-readable.

**Gate 1: PASS.**

## FASE 2 — Repositorio y Git — COMPLETE

- [x] `main` como stable/certified.
- [x] `mainline` flow.
- [x] `develop` flow.
- [x] ramas temporales/prefixes.
- [x] Conventional Commits.
- [x] Pull Requests.
- [x] merge strategy.
- [x] release/tagging.
- [x] PR template.
- [x] repository hygiene.

**Gate 2: PASS.**

## FASE 3 — Documentación — COMPLETE

- [x] documentos obligatorios.
- [x] autoridad documental.
- [x] synchronization rule.
- [x] anti-duplication rule.
- [x] README template.
- [x] FOUNDATION template.
- [x] AGENTS template.
- [x] ADR template.

**Gate 3: PASS.**

## FASE 4 — Arquitectura — COMPLETE

- [x] arquitectura lógica.
- [x] arquitectura física.
- [x] domain ownership.
- [x] dependency direction.
- [x] cycle prohibition.
- [x] core/domain/application/infrastructure/interface guidance.
- [x] false shared abstraction rule.
- [x] profile extension rule.
- [x] architecture policy machine-readable.

**Gate 4: PASS documental/policy.** La automatización profunda de import boundaries queda profile/stack-specific.

## FASE 5 — Perfiles v1 — COMPLETE

- [x] `web-application`.
- [x] `api`.
- [x] `static-web`.
- [x] `library`.
- [x] perfiles no implementados no son aceptados por schema/bootstrap.

Diferidos a una versión posterior:

- [ ] `saas`.
- [ ] `ai-system`.

**Gate 5: PASS para perfiles v1 soportados.**

## FASE 6 — Contrato de adopción — COMPLETE

- [x] `project.standard.yml`.
- [x] JSON Schema draft 2020-12.
- [x] versión.
- [x] perfil.
- [x] metadata de proyecto.
- [x] Git flow.
- [x] excepciones.
- [x] validación ejecutable con AJV 2020 + YAML.
- [x] STANDARD adopta su propio contrato.

**Gate 6: PASS.**

## FASE 7 — Seguridad — COMPLETE BASELINE

- [x] secretos prohibidos.
- [x] `.env` / `.env.example` policy.
- [x] dependency hygiene.
- [x] input validation at trust boundaries.
- [x] auth/authz scoped by applicability.
- [x] secure errors/logging.
- [x] P0/P1 security blockers.
- [x] basic forbidden sensitive-file verifier.

**Gate 7: PASS baseline.** Scanners avanzados quedan profile/stack-specific.

## FASE 8 — Calidad y testing — COMPLETE BASELINE

- [x] definition of done.
- [x] applicable lint/typecheck/test/build model.
- [x] architecture/documentation/security gates.
- [x] no arbitrary universal coverage percentage.
- [x] P0/P1/P2/P3 severity.
- [x] certification bound to exact commit/HEAD.
- [x] distinction IMPLEMENTED / TESTED / INTEGRATED / CERTIFIED.
- [x] CI parity rule.

**Gate 8: PASS.**

## FASE 9 — Verificador ejecutable — IMPLEMENTED

- [x] Node 20+ runtime.
- [x] `pnpm standard:verify`.
- [x] required files.
- [x] YAML parsing.
- [x] JSON Schema 2020-12 validation.
- [x] VERSION consistency.
- [x] basic forbidden sensitive files.
- [x] readable PASS/FAIL.
- [x] exit 0 / non-zero semantics.
- [x] first CI failure detected a real verifier defect and was corrected.

**Gate 9: awaiting clean CI PASS after fix.**

## FASE 10 — Bootstrap — IMPLEMENTED

- [x] `pnpm bootstrap <name> [profile] [destination]`.
- [x] supported profile selection.
- [x] `project.standard.yml` generation.
- [x] base docs generation.
- [x] default `mainline` declaration.
- [x] refuse non-empty destination.
- [x] generated project is re-verified in self-test.

**Gate 10: awaiting clean CI PASS.**

## FASE 11 — CI — IMPLEMENTED

- [x] GitHub Actions workflow.
- [x] push/PR triggers for `main` and `develop`.
- [x] dependency install.
- [x] conformance verification.
- [x] self-tests.
- [x] failure propagates to CI.
- [x] failure evidence was observed on PR #1.

**Gate 11: awaiting first clean PASS.**

## FASE 12 — Auditoría del ecosistema — COMPLETE

- [x] TOURNA reviewed.
- [x] ACTIO reviewed.
- [x] LEOLEGUIZAMON reviewed.
- [x] SEOT reviewed.
- [x] BrandADN reviewed.
- [x] common/difference matrix.
- [x] cross-project rules extracted.
- [x] product-specific rules excluded.
- [x] Git-flow assumption corrected from evidence.
- [x] flat authority assumption corrected from SEOT evidence.
- [x] exact-revision certification rule extracted from BrandADN/Tourna/ACTIO patterns.

**Gate 12: PASS.**

## FASE 13 — Dogfooding — IMPLEMENTED

- [x] STANDARD has `project.standard.yml`.
- [x] valid fixture must PASS.
- [x] invalid fixture must FAIL.
- [x] bootstrap fixture is generated.
- [x] generated fixture must PASS verifier.

**Gate 13: awaiting clean CI PASS.**

## FASE 14 — v1.0.0 Certification — PENDING

- [ ] CI PASS on integration PR after verifier fix.
- [x] five-project ecosystem comparison.
- [ ] final contradiction audit.
- [ ] no P0/P1 blockers.
- [ ] update version references from `0.1.0` to `1.0.0`.
- [ ] update CHANGELOG for release.
- [ ] merge certified candidate.
- [ ] tag `v1.0.0`.

**Gate final: NOT YET CERTIFIED.**

# Five required capabilities

1. **Specify** — implemented.
2. **Declare** — implemented.
3. **Generate** — implemented.
4. **Verify** — implemented; clean CI evidence pending.
5. **Enforce** — implemented; failure already proven, PASS pending.

# Immediate path to v1.0.0

```text
latest develop
→ PR #1 CI PASS
→ final contradiction audit
→ remove P0/P1 blockers
→ promote version 1.0.0
→ release verification on exact HEAD
→ merge
→ post-merge verification
→ tag v1.0.0
```
