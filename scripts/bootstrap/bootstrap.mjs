import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const STANDARD_VERSION = '1.1.0';
const INITIAL_PROJECT_VERSION = '0.1.0';
const [, , projectName, profile = 'web-application', destinationArg] = process.argv;
const allowedProfiles = new Set(['web-application', 'api', 'static-web', 'library']);

if (!projectName) {
  console.error('Usage: pnpm bootstrap <project-name> [profile] [destination]');
  process.exit(1);
}

if (!allowedProfiles.has(profile)) {
  console.error(`Unsupported profile: ${profile}`);
  process.exit(1);
}

const destination = path.resolve(destinationArg ?? projectName);
if (fs.existsSync(destination) && fs.readdirSync(destination).length > 0) {
  console.error(`Refusing to overwrite non-empty destination: ${destination}`);
  process.exit(1);
}

fs.mkdirSync(destination, { recursive: true });
for (const dir of ['docs/architecture', 'docs/adr', 'src', 'tests', 'scripts']) {
  fs.mkdirSync(path.join(destination, dir), { recursive: true });
}

const files = {
  'README.md': `# ${projectName}\n\nProject generated from leoleguizamonpy/STANDARD.\n\n## STANDARD\n\n- Version: ${STANDARD_VERSION}\n- Profile: ${profile}\n- Git flow: mainline\n\n## Authorities\n\n- FOUNDATION.md — product identity, scope and invariants\n- ROADMAP.md — execution sequence, current state and evidence\n`,
  'FOUNDATION.md': `# FOUNDATION — ${projectName}\n\n## Problem\n\nTBD\n\n## Purpose\n\nTBD\n\n## Scope\n\nTBD\n\n## Non-goals\n\nTBD\n\n## Domain boundaries\n\nTBD\n\n## Invariants\n\n- TBD\n`,
  'ROADMAP.md': `# ROADMAP — ${projectName}\n\n## Estado general\n\n- Estado: NOT STARTED\n- Versión/baseline: ${INITIAL_PROJECT_VERSION}\n- STANDARD: ${STANDARD_VERSION}\n- Fase activa: TBD\n- SHA certificado/verificado: TBD\n\n## Secuencia\n\n| Fase / Hito | Estado | Evidencia | Criterio de cierre |\n|---|---|---|---|\n| 00 — Foundation | NOT STARTED | TBD | TBD |\n| 01 — Architecture | NOT STARTED | TBD | TBD |\n| 02 — Implementation | NOT STARTED | TBD | TBD |\n| 03 — Verification | NOT STARTED | TBD | TBD |\n| 04 — Certification / Closure | NOT STARTED | TBD | TBD |\n\n## Bloqueos\n\n- Ninguno declarado.\n\n## Deuda conocida\n\n- Ninguna declarada.\n\n## Próximo trabajo\n\n- TBD\n\n## Regla de estado\n\nIMPLEMENTED != TESTED != INTEGRATED != CERTIFIED != CLOSED\n\n## Límite de autoridad\n\nROADMAP gobierna secuencia, estado, evidencia, bloqueos, deuda y siguiente trabajo. No redefine identidad, alcance, invariantes, dominios ni arquitectura del producto.\n`,
  'AGENTS.md': `# AGENTS — ${projectName}\n\nFollow FOUNDATION.md, ROADMAP.md, adopted STANDARD rules, ADRs and repository policies. FOUNDATION owns product identity/scope/invariants. ROADMAP owns execution state/sequence/evidence and must not redefine product or architecture authority. Run required verification before declaring completion.\n`,
  'CHANGELOG.md': `# Changelog\n\n## ${INITIAL_PROJECT_VERSION}\n\n- Initial bootstrap.\n`,
  'VERSION': `${INITIAL_PROJECT_VERSION}\n`,
  'project.standard.yml': `standard:\n  repository: leoleguizamonpy/STANDARD\n  version: ${STANDARD_VERSION}\n  profile: ${profile}\nproject:\n  name: ${projectName}\n  version: ${INITIAL_PROJECT_VERSION}\ngit:\n  flow: mainline\nexceptions: []\n`
};

for (const [relativePath, content] of Object.entries(files)) {
  const fullPath = path.join(destination, relativePath);
  if (fs.existsSync(fullPath)) {
    console.error(`Refusing to overwrite existing file: ${fullPath}`);
    process.exit(1);
  }
  fs.writeFileSync(fullPath, content, 'utf8');
}

console.log('STANDARD BOOTSTRAP: PASS');
console.log(`STANDARD version: ${STANDARD_VERSION}`);
console.log(`Project: ${projectName}`);
console.log(`Project version: ${INITIAL_PROJECT_VERSION}`);
console.log(`Profile: ${profile}`);
console.log('Git flow: mainline');
console.log(`Destination: ${destination}`);
console.log('Next: complete FOUNDATION.md, ROADMAP.md and project-specific architecture before feature development.');
