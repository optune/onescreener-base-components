// options for commonjs rollup plugin
export default {
  namedExports: {
    // left-hand side can be an absolute path, a path
    // relative to the current directory, or the name
    // of a module in node_modules
    'node_modules/react-is/index.js': [ 'isValidElementType' ]
  },
  exclude: [],
  include: [],
}
