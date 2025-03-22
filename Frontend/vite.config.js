import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   preview: {
    host: '0.0.0.0',
    port: 4173, // Change if needed
    allowedHosts: ['clubsync.onrender.com'], // Allow Render domain
  },
  server: {
    host: '0.0.0.0',
    port: 5173, // Change if needed
  },
})
