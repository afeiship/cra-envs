import { defineConfig, Options } from 'tsup';
import { umdWrapper } from 'esbuild-plugin-umd-wrapper';
import { replace } from 'esbuild-plugin-replace';

const baseConfig = {
  entry: ['src/*.ts'],
  format: ['cjs', 'esm'],
  cjsInterop: true,
  clean: true,
  dts: true,
  sourcemap: true,
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    };
  },
} as Options;

export default defineConfig([
  { ...baseConfig, splitting: true },
  {
    ...baseConfig,
    format: ['umd'] as any,
    esbuildPlugins: [
      replace({
        'export default': 'export =',
      }),
      umdWrapper({
        libraryName: 'fullscreen',
      }),
    ],
  },
]);
