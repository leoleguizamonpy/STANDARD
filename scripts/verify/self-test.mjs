import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'standard-self-test-'));
const validDir = path.join(tempRoot, 'valid');
const invalidDir = path.join(tempRoot, 'invalid');
fs.mkdirSync(validDir, { recursive: true });
fs.mkdirSync(invalidDir, { recursive: true });

const baseFiles = {
  'README.md': '# Fixture\n',
  'FOUNDATION.md': '# FOUNDATION\n',
  'AGENTS.md': '# AGENTS\n',
  'CHANGELOG.md': '# Changelog\n',
  'VERSION': '0.1.0\n',
  'project.standard.yml': [
    'standard:',
    '  repository: leoleguizamonpy/STANDARD',
    '  version: 0.1.0',
    '  profile: web-application',
    'project:',
    '  name: fixture',
    '  version: 0.1.0',
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
const valid = spawnSync(process.execPath, [verifier, validDir], { encoding: 'utf8' });
const invalid = spawnSync(process.execPath, [verifier, invalidDir], { encoding: 'utf8' });

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

console.log('STANDARD SELF TEST: PASS');
console.log('- valid fixture => PASS');
console.log('- invalid fixture => FAIL');
