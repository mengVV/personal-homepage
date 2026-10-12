import { access, copyFile, cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
const required = [
  'index.html',
  'assets/js/profile.js',
  'assets/js/script.js',
  'assets/css/style.css',
  'assets/css/custom.css',
  'LICENSE',
];

// Validate before removing the previous deployment folder.
for (const file of required) {
  try {
    await access(path.join(root, file));
  } catch {
    throw new Error(`缺少必要文件：${file}`);
  }
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await copyFile(path.join(root, 'index.html'), path.join(output, 'index.html'));
await cp(path.join(root, 'assets'), path.join(output, 'assets'), {
  recursive: true,
  // Copy website assets only; exclude repository metadata and credentials.
  filter(source) {
    const segments = path.relative(path.join(root, 'assets'), source).split(path.sep);
    return !segments.some((segment) => {
      const name = segment.toLowerCase();
      return name === '.git'
        || name === '.github'
        || name === '.git-credentials'
        || name === '.ssh'
        || name === '.aws'
        || name === '.npmrc'
        || name === '.netrc'
        || name === '.env'
        || name.startsWith('.env.')
        || name.includes('credential')
        || name === 'id_rsa'
        || name === 'id_ed25519'
        || /\.(pem|key|p12|pfx)$/.test(name);
    });
  },
});
await copyFile(path.join(root, 'LICENSE'), path.join(output, 'LICENSE'));

console.log('已准备静态部署目录：dist/');
