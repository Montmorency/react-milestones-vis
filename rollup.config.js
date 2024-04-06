import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript'

import postcss from 'rollup-plugin-postcss';
import visualizer from 'rollup-plugin-visualizer';
import ts from 'rollup-plugin-ts';
import json from '@rollup/plugin-json';



import { readFileSync } from 'fs';

const extensions = ['.js', '.ts', '.jsx', '.tsx'];


const packageJson = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

export default {
  input: './src/index.ts',
  output:[
    {
      file: packageJson.main,
      name: 'react-milestones-vis',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: packageJson.module,
      name: 'react-milestones-vis',
      format: 'esm',
      sourcemap: true
    }
],
  plugins: [
    peerDepsExternal(), //adds package peerdeps
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    postcss()
  ],
  external: ['react', 'react-dom'],
};


