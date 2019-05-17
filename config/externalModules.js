import pkg from '../package.json'

const externalSubpackages = ['react-is']
const externals = new Set(
  Object.keys(pkg.dependencies)
    .concat(Object.keys(pkg.peerDependencies))
    .concat(externalSubpackages)
)

export { externals }
