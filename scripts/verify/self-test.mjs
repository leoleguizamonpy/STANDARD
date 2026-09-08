import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const STANDARD_VERSION = '1.1.0';
const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'standard-self-test-'));
const validDir = path.join(tempRoot, 'valid');
const invalidDir = path.join(tempRoot, 'invalid');
const generatedDir = path.join(tempRoot, 'generated');
fs.mkdirSync(validDir, { recursive: true });
fs.mkdirSync(invalidDir, { recursive: true });

const baseFiles = {
  'README.md': '# Fixture\n',
  'FOUNDATION.md': '# FOUNDATION\n',
  'ROADMAP.md': '# ROADMAP\n\nIMPLEMENTED != TESTED != INTEGRATED != CERTIFIED != CLOSED\n',
  'AGENTS.md': '# AGENTS\n',
  'CHANGELOG.md': '# Changelog\n',
  'VERSION': '0.1.0\n',
  'project.standard.yml': [
    'standard:',
    '  repository: leoleguizamonpy/STANDARD',
    `  version: ${STANDARD_VERSION}`,
    '  profile: web-application',
    'project:',
    '  name: fixture',
    '  version: 0.1.0',
    'git:',
    '  flow: mainline',
    'exceptions: []',
    ''
  ].join('\n')
};

for (const [name, content] of Object.entries(baseFiles)) {
  fs.writeFileSync(path.join(validDir, name), content, 'utf8');
}

for (const [name, content] of Object.entries(baseFiles)) {
  if (name !== 'FOUNDATION.md') fs.writeFileSync(path.join(invalidDir, name), content, 'utf8');
}

const verifier = path.resolve('scripts/verify/verify.mjs');
const bootstrap = path.resolve('scripts/bootstrap/bootstrap.mjs');
const valid = spawnSync(process.execPath, [verifier, validDir], { encoding: 'utf8' });
const invalid = spawnSync(process.execPath, [verifier, invalidDir], { encoding: 'utf8' });
const generated = spawnSync(process.execPath, [bootstrap, 'generated-fixture', 'web-application', generatedDir], { encoding: 'utf8' });
const generatedVerification = spawnSync(process.execPath, [verifier, generatedDir], { encoding: 'utf8' });

if (valid.status !== 0) {
  console.error('SELF TEST: FAIL — valid fixture did not pass');
  console.error(valid.stdout);
  console.error(valid.stderr);
  process.exit(1);
}

if (invalid.status === 0) {
  console.error('SELF TEST: FAIL — invalid fixture unexpectedly passed');
  process.exit(1);
}

if (generated.status !== 0) {
  console.error('SELF TEST: FAIL — bootstrap did not generate a project');
  console.error(generated.stdout);
  console.error(generated.stderr);
  process.exit(1);
}

if (!fs.existsSync(path.join(generatedDir, 'ROADMAP.md'))) {
  console.error('SELF TEST: FAIL — bootstrap did not generate ROADMAP.md');
  process.exit(1);
}

if (generatedVerification.status !== 0) {
  console.error('SELF TEST: FAIL — generated project is not STANDARD-conformant');
  console.error(generatedVerification.stdout);
  console.error(generatedVerification.stderr);
  process.exit(1);
}

console.log('STANDARD SELF TEST: PASS');
console.log(`- standard version => ${STANDARD_VERSION}`);
console.log('- valid fixture => PASS');
console.log('- invalid fixture => FAIL');
console.log('- bootstrap roadmap => PRESENT');
console.log('- bootstrap fixture => GENERATED + PASS');
