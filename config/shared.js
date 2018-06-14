// Rollup plugins.
import buble from 'rollup-plugin-buble'
import commonjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'

// shared modules for different envs
import external from './externalModules'
import cjsopts from './commonjs'

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
    commonjs(cjsopts),
    buble({
      transforms: { dangerousTaggedTemplateString: true },
      objectAssign: 'Object.assign',
    }),
    globals(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
  ],
}
