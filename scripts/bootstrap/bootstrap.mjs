import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const [, , projectName, profile = 'web-application', destinationArg] = process.argv;
const allowedProfiles = new Set(['web-application', 'api', 'static-web', 'saas', 'ai-system', 'library']);

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
  'README.md': `# ${projectName}\n\nProject generated from leoleguizamonpy/STANDARD.\n\n## STANDARD\n\n- Version: 0.1.0\n- Profile: ${profile}\n`,
  'FOUNDATION.md': `# FOUNDATION — ${projectName}\n\n## Problem\n\nTBD\n\n## Purpose\n\nTBD\n\n## Scope\n\nTBD\n\n## Non-goals\n\nTBD\n\n## Domain boundaries\n\nTBD\n\n## Invariants\n\n- TBD\n`,
  'AGENTS.md': `# AGENTS — ${projectName}\n\nFollow FOUNDATION.md, adopted STANDARD rules, ADRs and repository policies. Run required verification before declaring completion.\n`,
  'CHANGELOG.md': `# Changelog\n\n## 0.1.0\n\n- Initial bootstrap.\n`,
  'VERSION': '0.1.0\n',
  'project.standard.yml': `standard:\n  repository: leoleguizamonpy/STANDARD\n  version: 0.1.0\n  profile: ${profile}\nproject:\n  name: ${projectName}\n  version: 0.1.0\nexceptions: []\n`
};

for (const [relativePath, content] of Object.entries(files)) {
  const fullPath = path.join(destination, relativePath);
  if (fs.existsSync(fullPath)) {
    console.error(`Refusing to overwrite existing file: ${fullPath}`);
    process.exit(1);
  }
  fs.writeFileSync(fullPath, content, 'utf8');
}

console.log(`STANDARD BOOTSTRAP: PASS`);
console.log(`Project: ${projectName}`);
console.log(`Profile: ${profile}`);
console.log(`Destination: ${destination}`);
console.log('Next: complete FOUNDATION.md and project-specific architecture before feature development.');
