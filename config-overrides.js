// @ts-check
const { injectBabelPlugin, getLoader } = require('react-app-rewired')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = function override(config, env) {
  const loaders = config.module.rules[1].oneOf

  const jsRule = loaders[1]
  delete jsRule.options.babelrc

  const tsRule = loaders[2]
  tsRule.use.unshift('babel-loader')

  loaders.unshift({
    test: /\.(graphql|gql)$/,
    exclude: /node_modules/,
    loader: 'graphql-tag/loader'
  })

  const uglify = config.plugins.find(p => p instanceof UglifyJsPlugin)

  if (uglify) {
    uglify.options.parallel = 4
    uglify.options.uglifyOptions.output.ascii_only = false
  }

  return config
}
