import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import dts from 'vite-plugin-dts'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [vue(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      exclude: './src/main.ts'
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib.ts'),
      name: '@shangou/spellbook',
      fileName: 'spellbook',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        }
      },
    },
  },

})
