import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts()
  ],
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'ext-common',
      fileName: 'ext-common'
    }
  }
})
