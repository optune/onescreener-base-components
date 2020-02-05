// Rollup plugins.
import path from 'path'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import url from '@rollup/plugin-url'

import pkg from '../package.json'

// shared modules for different envs
import { externals } from './externalModules.js'

const config = ({ sourcemap }) => ({
  input: [path.resolve(__dirname, '../src/index.js')],
  output: [
    {
      dir: path.resolve(__dirname, '../lib/'),
      format: 'esm',
      sourcemap,
    },
  ],
  preserveModules: true,
  plugins: [
    peerDepsExternal({
      includeDependencies: true,
    }),

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
})

export default config
