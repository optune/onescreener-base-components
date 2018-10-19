import config from './shared.js'

export default {
  ...config,
  output: {
    ...config.output,
    sourcemap: true,
  },
}
