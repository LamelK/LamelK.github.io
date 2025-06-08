import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // For your specific case (LamelK.github.io)
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});