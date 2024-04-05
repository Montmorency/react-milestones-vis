import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript'

import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import ts from 'rollup-plugin-ts';
import json from '@rollup/plugin-json';

import visualizer from 'rollup-plugin-visualizer';


import { readFileSync } from 'fs';

const extensions = ['.js', '.ts', '.jsx', '.tsx'];


const packageJson = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: './src/index.ts',
  output:[{
      file: packageJson.main,
      format: 'cjs',
      name: 'react-milestones-vis',
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    }],
  plugins: [
    peerDepsExternal(),
    resolve({
            browser: true,
            dedupe: ['react'],
        }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    postcss()
  ],
  external: ['react', 'react-dom'],
};
