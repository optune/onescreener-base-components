// Rollup plugins.
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import url from '@rollup/plugin-url'

import pkg from '../package.json'

// shared modules for different envs
import { externals } from './externalModules.js'

export default {
  input: 'src/index.js',
  output: [
    // {
    //   file: pkg.main,
    //   format: 'cjs',
    //   exports: 'named',
    // },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
    },
  ],
  external: id => externals.has(id),
  plugins: [
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),

    url({
      limit: false,
      include: ['**/*.woff2'],
      emitFiles: true, // defaults to true
    }),

    babel(),

    resolve({
      mainFields: ['browser', 'main'],
      extensions: ['.js', '.jsx', '.json'],
    }),

    commonjs(),

    globals(),
  ],
}
