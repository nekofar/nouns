import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*.ts'],
  format: ['esm'],
  dts: {
    resolve: false,
    compilerOptions: {
      declarationMap: false,
    },
  },
  outDir: 'dist',
  outExtension({ format }) {
    return { js: format === 'esm' ? '.mjs' : '.cjs' }
  },
  splitting: false,
  clean: true,
  treeshake: true,
  sourcemap: true,
  minify: 'terser',
  terserOptions: {
    format: {
      comments: false,
    },
  },
})
