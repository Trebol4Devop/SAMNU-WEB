import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { syncWebToDist } from './scripts/sync-web.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const webSourceDir = path.resolve(__dirname, '../web')

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.wasm': 'application/wasm',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.css': 'text/css; charset=utf-8',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

function serveStaticFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase()
  const mime = MIME_TYPES[ext] || 'application/octet-stream'
  res.setHeader('Content-Type', mime)
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin')
  res.setHeader('Cross-Origin-Embedder-Policy', 'credentialless')
  const stream = fs.createReadStream(filePath)
  stream.pipe(res)
}

function samnuWebPlugin() {
  return {
    name: 'samnu-web-sync',
    closeBundle() {
      syncWebToDist()
    },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : ''

        // 1. Direct navigation to /web or /web/
        if (url === '/web' || url === '/web/') {
          const indexPath = path.join(webSourceDir, 'index.html')
          if (fs.existsSync(indexPath)) {
            return serveStaticFile(res, indexPath)
          }
        }

        if (url.startsWith('/web/')) {
          const relativeSub = url.slice(5)
          const targetPath = path.join(webSourceDir, relativeSub)
          if (fs.existsSync(targetPath) && fs.statSync(targetPath).isFile()) {
            return serveStaticFile(res, targetPath)
          }
        }

        // 2. Flutter runtime assets requested at root when <base href="/"> is active
        if (url.startsWith('/') && url.length > 1) {
          if (!url.startsWith('/@') && !url.startsWith('/src') && !url.startsWith('/node_modules')) {
            const relativeRoot = url.slice(1)
            const targetPath = path.join(webSourceDir, relativeRoot)
            if (fs.existsSync(targetPath) && fs.statSync(targetPath).isFile()) {
              return serveStaticFile(res, targetPath)
            }
          }
        }

        next()
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    samnuWebPlugin(),
  ],
})
