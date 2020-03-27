import fs from 'fs'
import { terser } from 'rollup-plugin-terser'
import analyze from 'rollup-plugin-analyzer'

import config from './shared.js'

// remove source map of previous dev builds if there is one
fs.unlink('lib/index.js.map', () => {})

const prodConfig = config({ sourcemap: false })

const prod = {
  ...prodConfig,
  plugins: [...prodConfig.plugins, terser(), analyze({ limit: 5, filter: [], root: __dirname })],
}

export default prod
