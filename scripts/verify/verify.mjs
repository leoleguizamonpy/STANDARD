import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import YAML from 'yaml';

const target = path.resolve(process.argv[2] ?? '.');
const standardRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const schemaPath = path.join(standardRoot, 'schemas/project.standard.schema.json');

const requiredFiles = [
  'README.md',
  'FOUNDATION.md',
  'AGENTS.md',
  'CHANGELOG.md',
  'VERSION',
  'project.standard.yml'
];

const forbiddenTrackedNames = ['.env', 'id_rsa', 'id_ed25519'];
const errors = [];

function fail(message) {
  errors.push(message);
}

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(target, file))) fail(`missing required file: ${file}`);
}

const configPath = path.join(target, 'project.standard.yml');
if (fs.existsSync(configPath)) {
  try {
    const config = YAML.parse(fs.readFileSync(configPath, 'utf8'));
    const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
    const ajv = new Ajv({ allErrors: true, strict: false });
    addFormats(ajv);
    const validate = ajv.compile(schema);
    if (!validate(config)) {
      for (const issue of validate.errors ?? []) {
        fail(`project.standard.yml ${issue.instancePath || '/'} ${issue.message}`);
      }
    }

    const versionFile = path.join(target, 'VERSION');
    if (fs.existsSync(versionFile)) {
      const projectVersion = fs.readFileSync(versionFile, 'utf8').trim();
      if (config?.project?.version && config.project.version !== projectVersion) {
        fail(`VERSION (${projectVersion}) does not match project.standard.yml project.version (${config.project.version})`);
      }
    }
  } catch (error) {
    fail(`cannot parse/validate project.standard.yml: ${error.message}`);
  }
}

for (const name of forbiddenTrackedNames) {
  if (fs.existsSync(path.join(target, name))) fail(`forbidden sensitive file present at repository root: ${name}`);
}

if (errors.length > 0) {
  console.error('STANDARD VERIFY: FAIL');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('STANDARD VERIFY: PASS');
console.log(`Target: ${target}`);
console.log(`Required files: ${requiredFiles.length}/${requiredFiles.length}`);
process.exit(0);
