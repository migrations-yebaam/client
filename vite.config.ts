import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tscongPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  root: '.',
  plugins: [
    react({
      include: '**/*.tsx'
    }),
    tscongPaths()
  ],
  resolve: {
    alias: {
      src: '/src'
    }
  },
  build: {
    outDir: './build'
  },
  server: {
    port: 3000,
    historyApiFallback: true,  // Redirigir todas las rutas a index.html
  },
  base: './',  // Ajustar la base si es necesario, para asegurar que las rutas se manejen correctamente
});
