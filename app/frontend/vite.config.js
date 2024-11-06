// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    coverage: {
      reporter: ['text', 'html'], // Generate text and html reports
      reportsDirectory: './coverage', // Reports will be saved here
      all: true, // Include all files in coverage
      include: ['src/**/*.js', 'src/**/*.jsx'], // Coverage for these files
      exclude: ['src/setupTests.js'], // Exclude setup files
    },
  },
});
