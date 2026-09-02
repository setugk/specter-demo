import { defineConfig } from 'vite';
import { specter } from 'vite-plugin-specter';

export default defineConfig({
  plugins: [specter({ claudeBridge: true })],
  server: { open: false },
});
