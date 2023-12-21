import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/*.ts'],
  format: ['cjs', 'esm', 'iife'],
  splitting: true,
  cjsInterop: true,
  globalName: 'fullscreen',
  // external: ['react'],
  dts: true,
  clean: true,
  sourcemap: true,
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    };
  },
});
