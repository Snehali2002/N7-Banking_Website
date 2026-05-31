import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-assets',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const urlPath = req.url.split('?')[0]
          if (urlPath.startsWith('/assets/')) {
            const filePath = path.join(__dirname, decodeURIComponent(urlPath))
            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              const ext = path.extname(filePath).toLowerCase();
              const contentType = {
                '.png': 'image/png',
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.svg': 'image/svg+xml',
                '.gif': 'image/gif',
                '.css': 'text/css',
                '.js': 'application/javascript',
              }[ext] || 'application/octet-stream';
              res.setHeader('Content-Type', contentType);
              res.end(fs.readFileSync(filePath));
              return;
            }
          }
          next();
        });
      },
      closeBundle() {
        const copyDir = (src, dest) => {
          if (!fs.existsSync(src)) return;
          fs.mkdirSync(dest, { recursive: true });
          const entries = fs.readdirSync(src, { withFileTypes: true });
          for (let entry of entries) {
            const srcPath = path.join(src, entry.name);
            const destPath = path.join(dest, entry.name);
            if (entry.isDirectory()) {
              copyDir(srcPath, destPath);
            } else {
              fs.copyFileSync(srcPath, destPath);
            }
          }
        };
        copyDir(path.join(__dirname, 'assets'), path.join(__dirname, 'dist/assets'));
      }
    }
  ]
})
