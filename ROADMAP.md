# ROADMAP — STANDARD

## Estado general

- Estado: `CLOSED`
- Versión: `1.1.0`
- Baseline previa certificada: `1.0.0`
- Fase activa: ninguna; 1.1.0 cerrada
- Integración principal: `09a94750319e0a06ac8d816ced0d4ea166233f13`
- Evidencia principal: `STANDARD Verify #43 = PASS`
- Inventario remoto tras integración: solo `main`

## Secuencia 1.1.0

| Fase / Hito | Estado | Evidencia | Criterio de cierre |
|---|---|---|---|
| Definir autoridad ROADMAP | CLOSED | `docs/roadmap/ROADMAP_STANDARD.md` | contrato normativo presente |
| Añadir plantilla canónica | CLOSED | `templates/ROADMAP.template.md` | plantilla presente |
| Integrar con Documentation/Governance | CLOSED | docs actualizados | límites FOUNDATION/ROADMAP explícitos |
| Generar ROADMAP en bootstrap | CLOSED | bootstrap + self-test | fixture generado contiene ROADMAP |
| Alinear STANDARD con mainline | CLOSED | `project.standard.yml` | `git.flow: mainline` |
| Verificación de rama | CLOSED | `STANDARD Verify #42 = PASS` sobre `9e01a9cfd5656d5d5f85e9ab5ccf83df5253059d` | gate PASS sobre HEAD exacto |
| Integración | CLOSED | PR #6 squash merge | cambio integrado en `main@09a94750319e0a06ac8d816ced0d4ea166233f13` |
| Verificación post-merge | CLOSED | `STANDARD Verify #43 = PASS` | gate integrado PASS |
| Limpieza física | CLOSED | inventario remoto | solo `main` |

## Bloqueos

- Ninguno.

## Deuda conocida

- La validación semántica profunda del contenido de ROADMAP permanece documental para evitar heurísticas frágiles. El bootstrap y self-test garantizan la generación del documento; futuras versiones pueden añadir validación estructural más rica si existe evidencia suficiente.

## Próximo trabajo

- Ningún trabajo requerido para cerrar 1.1.0.
- Futuras ampliaciones deben abrir una nueva rama temporal y una nueva versión cuando introduzcan reglas o capacidades normativas.

## Regla de estado

```text
IMPLEMENTED != TESTED != INTEGRATED != CERTIFIED != CLOSED
```

## Límite de autoridad

Este ROADMAP describe secuencia, estado, evidencia, bloqueos, deuda y siguiente trabajo de STANDARD. No redefine la identidad ni los principios normativos de `FOUNDATION.md`, ni sustituye documentación de arquitectura, governance o políticas.
