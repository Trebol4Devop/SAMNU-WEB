import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const webSourceDir = path.resolve(__dirname, '../../web');
const distDir = path.resolve(__dirname, '../dist');
const distWebDir = path.resolve(distDir, 'web');

export function syncWebToDist() {
  if (!fs.existsSync(webSourceDir)) {
    console.warn(`[sync-web] Source directory not found: ${webSourceDir}`);
    return;
  }

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // 1. Copy entire web folder to dist/web/
  console.log(`[sync-web] Copying ${webSourceDir} to ${distWebDir}...`);
  fs.cpSync(webSourceDir, distWebDir, { recursive: true });

  // 2. Copy web runtime assets to dist root (excluding index.html) to support Flutter's <base href="/">
  console.log(`[sync-web] Mirroring web runtime assets to ${distDir} (preserving landing page index.html)...`);
  const items = fs.readdirSync(webSourceDir);

  for (const item of items) {
    if (item === 'index.html') {
      continue; // Never overwrite the landing page!
    }
    const srcPath = path.join(webSourceDir, item);
    const destPath = path.join(distDir, item);

    if (item === 'assets') {
      // Merge assets directory
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      fs.cpSync(srcPath, destPath, { recursive: true });
    } else {
      fs.cpSync(srcPath, destPath, { recursive: true });
    }
  }

  console.log('[sync-web] Successfully synchronized SAMNU Web into dist and dist/web.');
}

// If run directly via CLI
if (process.argv[1] === __filename) {
  syncWebToDist();
}
