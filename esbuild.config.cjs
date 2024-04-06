// esbuild.config.js
const res = require('esbuild').buildSync({
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
  format: 'esm',
  platform: 'browser',
  sourcemap: true,
  outfile: 'dist/index.js',
  external: ['react', 'react-dom'], 
})

