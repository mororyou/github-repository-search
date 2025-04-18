import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    env: dotenv.config({ path: '.env.test' }).parsed,
    globals: true,
    environment: 'jsdom',
    coverage: {
      all: true,
      clean: true,
      exclude: ['**/node_modules/**', 'build/**', 'src/components/_ui/**'],
      reporter: ['text', 'html', 'json-summary', 'cobertura'],
    },
  },
});
