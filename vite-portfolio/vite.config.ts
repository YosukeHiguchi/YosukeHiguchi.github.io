import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pluginChecker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), pluginChecker({ typescript: true })],
  build: {
    outDir: '../docs',
  }
})
