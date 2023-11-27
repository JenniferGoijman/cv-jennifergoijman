import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cv-jennifergoijman/',
  optimizeDeps: {
    include: [
      'i18next',
      'react',
      'react-dom',
      'react-i18next',
      'uniqid',
    ]
  }
})
