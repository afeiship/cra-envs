import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/*.ts'],
  format: ['cjs', 'esm', 'iife'],
  splitting: true,
  cjsInterop: true,
  globalName: 'fullscreen',
  // external: ['react'],
  dts: false,
  clean: true,
  sourcemap: true,
  onSuccess: 'tsc --emitDeclarationOnly --declaration --outDir dist',
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    };
  },
});
