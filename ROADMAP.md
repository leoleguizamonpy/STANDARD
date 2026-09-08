# ROADMAP — STANDARD

## Estado general

- Estado: `IN PROGRESS`
- Versión objetivo: `1.1.0`
- Baseline previa certificada: `1.0.0`
- Fase activa: formalización de autoridad ROADMAP
- SHA certificado/verificado: pendiente de CI y merge de 1.1.0

## Secuencia 1.1.0

| Fase / Hito | Estado | Evidencia | Criterio de cierre |
|---|---|---|---|
| Definir autoridad ROADMAP | IMPLEMENTED | `docs/roadmap/ROADMAP_STANDARD.md` | contrato normativo presente |
| Añadir plantilla canónica | IMPLEMENTED | `templates/ROADMAP.template.md` | plantilla presente |
| Integrar con Documentation/Governance | IMPLEMENTED | docs actualizados | límites FOUNDATION/ROADMAP explícitos |
| Generar ROADMAP en bootstrap | IMPLEMENTED | bootstrap + self-test | fixture generado contiene ROADMAP |
| Alinear STANDARD con mainline | IN PROGRESS | `project.standard.yml` | `git.flow: mainline` |
| Verificación | NOT STARTED | CI | `pnpm verify` PASS |
| Integración | NOT STARTED | PR/merge | cambio integrado en `main` |
| Cierre | NOT STARTED | post-merge CI + ramas | CI PASS y solo `main` |

## Bloqueos

- Ninguno conocido.

## Deuda conocida

- El verificador 1.1.0 valida presencia/estructura básica de ROADMAP cuando aplica de forma detectable; validación semántica profunda permanece documental para evitar heurísticas frágiles.

## Próximo trabajo

1. completar metadata/versionado 1.1.0;
2. ejecutar CI sobre rama;
3. integrar mediante PR;
4. verificar `main` post-merge;
5. eliminar físicamente la rama temporal;
6. declarar 1.1.0 CLOSED sobre evidencia exacta.

## Regla de estado

```text
IMPLEMENTED != TESTED != INTEGRATED != CERTIFIED != CLOSED
```

## Límite de autoridad

Este ROADMAP describe secuencia, estado, evidencia, bloqueos, deuda y siguiente trabajo de STANDARD. No redefine la identidad ni los principios normativos de `FOUNDATION.md`, ni sustituye documentación de arquitectura, governance o políticas.
