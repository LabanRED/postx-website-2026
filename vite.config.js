import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/postx-website-2026/' : '/',
  plugins: [
    vue(),
    tailwindcss(),
  ],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
})
