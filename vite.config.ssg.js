import { defineConfig } from 'vite'
import baseConfig from './vite.config.js'

export default defineConfig({
  ...baseConfig,
  build: {
    ssr: 'src/entry-server.jsx',
    outDir: 'dist/server',
  },
})