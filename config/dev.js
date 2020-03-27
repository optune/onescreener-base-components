import config from './shared.js'

const devConfig = config({ sourcemap: true })

export default {
  ...devConfig,
}
