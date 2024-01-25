import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/*.ts'],
  format: ['cjs', 'esm'],
  splitting: true,
  cjsInterop: true,
  clean: true,
  dts: true,
  sourcemap: true,
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    };
  },
});
