// @ts-check
const { injectBabelPlugin, getLoader } = require('react-app-rewired')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = function override(config, env) {
  const loaders = config.module.rules[1].oneOf

  const tsRule = loaders[2]
  tsRule.use.unshift('babel-loader')

  loaders.unshift({
    test: /\.(graphql|gql)$/,
    exclude: /node_modules/,
    loader: 'graphql-tag/loader'
  })

  if (env === 'development' || process.argv.includes('--analyze')) {
    config.plugins.push(new BundleAnalyzerPlugin())
  }

  const uglify = config.plugins.find(p => p instanceof UglifyJsPlugin)

  if (uglify) {
    uglify.options.parallel = 4
    uglify.options.uglifyOptions.output.ascii_only = false
  }

  return config
}
