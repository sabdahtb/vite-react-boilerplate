import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

import 'dotenv/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  define: {
    'process.env': process.env,
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 4173,
  },
})
