// Rollup plugins.
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'

// shared modules for different envs
import { externals } from './externalModules.js'

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs',
  },
  external: id => externals.has(id),
  plugins: [
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),

    url({
      limit: false,
      include: ['**/*.woff2'],
      emitFiles: true, // defaults to true
    }),

    commonjs(),

    babel({
      exclude: 'node_modules/**', // only transpile our source code
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            displayName: true,
            ssr: true,
          },
        ],
      ],
    }),

    resolve({
      mainFields: ['browser', 'main'],
      extensions: ['.js', '.jsx', '.json'],
    }),

    globals(),
  ],
}
