import config from './shared.js'

export default {
  ...config,
  output: config.output.map(o => ({ ...o, sourcemap: true })),
}
