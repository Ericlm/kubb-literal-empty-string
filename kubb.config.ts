import { defineConfig } from '@kubb/core'
import { pluginOas } from '@kubb/plugin-oas'
import { pluginTs } from '@kubb/plugin-ts'

export default defineConfig(() => {
  return {
    root: '.',

    input: {
      path: './petStore.json',
    },

    output: {
      path: './src/gen',
    },

    plugins: [
      pluginOas(),
      pluginTs()
    ],
  }
})