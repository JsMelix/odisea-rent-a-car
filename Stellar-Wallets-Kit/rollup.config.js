import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import dts from 'rollup-plugin-dts';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const libraryName = 'stellar-wallets-kit';

export default [
  {
    input: 'index.mjs',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      json(),
      typescript({
        tsconfig: './tsconfig.json',
        sourceMap: true,
        declaration: false,
        declarationDir: null,
      }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
  {
    input: 'index.d.ts',
    output: {
      file: pkg.types,
      format: 'es',
    },
    plugins: [
      dts(),
    ],
  },
];
