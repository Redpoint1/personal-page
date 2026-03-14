import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vuetify from 'vite-plugin-vuetify'
import packageMeta from './package.json'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), vuetify()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    'import.meta.env.VUE_APP_VERSION': JSON.stringify(packageMeta.version),
    'import.meta.env.VUE_APP_AUTHOR': JSON.stringify(packageMeta.author),
    'import.meta.env.VUE_APP_BUG_REPORT': JSON.stringify(packageMeta.bugs.url),
  },
})
