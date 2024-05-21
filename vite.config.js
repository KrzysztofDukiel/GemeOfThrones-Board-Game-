import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  parallel: false,
  resolve: {
    alias: {
      'sortablejs': 'sortablejs/modular/sortable.esm.js',
      '@': '/src',
    },
  },
})
