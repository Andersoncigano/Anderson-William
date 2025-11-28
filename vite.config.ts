import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Alterado de './' para '/' para garantir caminhos absolutos corretos no Vercel
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});