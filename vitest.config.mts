import react from '@vitejs/plugin-react';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig, UserConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      all: true,
      clean: true,
      exclude: ['**/node_modules/**', 'build/**'],
      reporter: ['text', 'html', 'json-summary', 'cobertura'],
    },
  },
} satisfies UserConfig);
