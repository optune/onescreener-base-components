// Rollup plugins.
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'

// shared modules for different envs
import external from './externalModules.js'
import cjsopts from './commonjs.js'

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs',
  },
  external,
  plugins: [
    resolve({
      browser: true,
      main: true,
      extensions: ['.js', '.jsx', '.json'],
    }),
    url({
      limit: false,
      include: ['**/*.woff2'],
      emitFiles: true, // defaults to true
    }),
    babel(),
    commonjs(cjsopts),
    globals(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
  ],
}
