import { defineConfig } from '@kubb/core'

export default defineConfig(() => {
  return {
    root: '.',

    input: {
      path: './petStore.json',
    },

    output: {
      path: './src/gen',
    },

    plugins: [],
  }
})