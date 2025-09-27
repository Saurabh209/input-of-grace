import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'), // your export hub
      name: 'InputOfGrace',                           // global variable for UMD build
      fileName: 'input-of-grace',                     // output filename prefix
    },
    rollupOptions: {
      // Exclude React from the bundle (peer dependency)
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
