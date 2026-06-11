import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'

export default defineConfig({
  /** Root-absolute URLs so deep links (e.g. /ar/ogami) load /assets/* correctly on Vercel */
  base: '/',
  plugins: [
    react(),
    compression({ algorithms: ['brotliCompress'], exclude: [/\.(png|webp|jpg|jpeg|gif|svg)$/] }),
    compression({ algorithms: ['gzip'], exclude: [/\.(png|webp|jpg|jpeg|gif|svg)$/] }),
  ],
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
          'vendor-motion': ['framer-motion'],
        },
      },
    },
  },
})
