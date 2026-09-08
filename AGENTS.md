# AGENTS

## Autoridad

Los agentes IA colaboran con el desarrollo, pero no sustituyen las fuentes de verdad del repositorio.

Orden de autoridad:

1. `FOUNDATION.md`
2. políticas y schemas vigentes
3. documentación de arquitectura
4. ADR aceptados
5. código y tests conformes
6. instrucciones temporales de trabajo

## Reglas obligatorias para agentes

- No introducir lógica de negocio específica de un producto dentro de STANDARD.
- No duplicar una regla existente bajo otro nombre o ubicación.
- No romper límites arquitectónicos para acelerar una entrega.
- No declarar una fase completada sin evidencia verificable.
- No eliminar o sustituir una fuente de verdad sin migración explícita.
- Toda excepción debe quedar documentada.
- Toda regla verificable automáticamente debe tender a convertirse en gate.
- Evitar dependencias innecesarias.
- Preferir cambios pequeños, trazables y reversibles.
- Mantener documentación y código sincronizados.

## Flujo esperado

```text
read authority
  ↓
identify scope
  ↓
work in branch
  ↓
implement
  ↓
verify
  ↓
audit
  ↓
PR
  ↓
merge
```

## Prohibición crítica

Un agente no puede declarar `STANDARD v1.0.0 certified` si no se cumplen todos los criterios definidos en la checklist de desarrollo y los quality gates obligatorios.