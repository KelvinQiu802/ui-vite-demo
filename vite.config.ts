import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: false,
    lib: {
      entry: './src/index.ts',
      name: 'UIVite',
      fileName: 'ui-vite',
      formats: ['es', 'cjs', 'iife', 'umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
  },
});
