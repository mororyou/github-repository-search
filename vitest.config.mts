/// <reference types="vitest" />
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
    setupFiles: ['./src/test/setup.ts'],
    exclude: [
      '**/node_modules/**',
      'build/**',
      '.next/**',
      'public/**',
      'src/components/_ui/**',
      '.storybook/**',
      'src/components/**/**.stories.tsx',
    ],
    coverage: {
      all: true,
      clean: true,
      reporter: ['text', 'html', 'json-summary', 'cobertura'],
      exclude: [
        '**/node_modules/**',
        'build/**',
        '.next/**',
        'public/**',
        'src/components/_ui/**',
        '.storybook/**',
        'src/components/**/**.stories.tsx',
      ],
    },
    environmentOptions: {
      jsdom: {
        resources: 'usable',
        runScripts: 'dangerously',
      },
    },
  },
});
