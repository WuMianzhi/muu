import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vueI18n from '@intlify/unplugin-vue-i18n/vite'
console.log(resolve(dirname(fileURLToPath(import.meta.url)), './src/locales'))
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    vueI18n({
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales')
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
