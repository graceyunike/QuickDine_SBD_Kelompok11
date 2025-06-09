import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    port: 5143
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true  // Add this to clear dist folder before build
  }
})