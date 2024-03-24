import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/sp-api': {
        target: 'http://178.18.253.143:8080/',
        changeOrigin: true,
        secure: false
      }
    }
  },
  plugins: [react()],
})
