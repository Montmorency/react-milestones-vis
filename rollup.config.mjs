import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import ts from 'rollup-plugin-ts';
import json from '@rollup/plugin-json';
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: './src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      name: 'react-milestones-viz',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    ts({
      hook: {
        outputPath: (path, kind) => `./build/${path.split('/').pop()}`,
      },
    }),
    postcss(),
  ],
};