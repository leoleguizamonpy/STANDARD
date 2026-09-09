# ROADMAP — STANDARD

## Estado general

- Estado: `IN PROGRESS`
- Versión objetivo: `1.2.0`
- Baseline previa certificada: `1.1.0`
- Fase activa: separación Architecture / Domain-Contracts / ADR
- SHA certificado/verificado: pendiente de CI y merge

## Secuencia 1.2.0

| Fase / Hito | Estado | Evidencia | Criterio de cierre |
|---|---|---|---|
| Definir Domain/Contract authority | IMPLEMENTED | `docs/domain/DOMAIN_CONTRACT_STANDARD.md` | autoridad funcional explícita |
| Formalizar ADR authority | IMPLEMENTED | `docs/adr/ADR_STANDARD.md` | ADR separado de current truth |
| Separar Architecture | IMPLEMENTED | `docs/architecture/ARCHITECTURE_RULES.md` | estructura técnica sin semántica duplicada |
| Propagar a bootstrap | IMPLEMENTED | `scripts/bootstrap/bootstrap.mjs` | directorios y autoridades separados |
| Versionar 1.2.0 | IMPLEMENTED | VERSION/package/project config | metadata alineada |
| Verificación de rama | NOT STARTED | CI | `pnpm verify` PASS |
| Integración | NOT STARTED | PR | merge a main |
| Verificación post-merge | NOT STARTED | CI | PASS sobre main |
| Limpieza física | NOT STARTED | inventario remoto | solo main |

## Bloqueos

- Ninguno conocido.

## Deuda conocida

- La verificación semántica profunda de ownership documental sigue siendo principalmente normativa; se automatizará solo donde sea determinista.

## Próximo trabajo

1. ejecutar CI de 1.2.0;
2. integrar por PR;
3. verificar main post-merge;
4. eliminar físicamente la rama temporal;
5. cerrar 1.2.0 con evidencia exacta.

## Regla de autoridad

```text
FOUNDATION = product identity and invariants
ROADMAP = execution state and sequence
GOVERNANCE = development/change rules
ARCHITECTURE = technical structure
DOMAIN / CONTRACTS = functional meaning and invariants
ADR = decision rationale/history
VERIFICATION / CERTIFICATION = evidence
```

## Regla de estado

```text
IMPLEMENTED != TESTED != INTEGRATED != CERTIFIED != CLOSED
```
