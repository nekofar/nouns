import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'subgraphs/index': 'src/subgraphs/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  outDir: 'dist',
  outExtension({ format }) {
    return { js: format === 'esm' ? '.mjs' : '.cjs' }
  },
  splitting: true,
  clean: true,
  treeshake: true,
  external: [],
  noExternal: [],
})
