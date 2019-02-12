const chalk = require('chalk').default
const webpack = require('webpack')
const { TsConfigPathsPlugin } = require('awesome-typescript-loader')

const nodeExternals = require('webpack-node-externals')

console.log(
  chalk.magentaBright(
    ` _      ___    __         __  ___       __ \n| | /| / (_)__/ /__ ____ / /_/ _ )___  / /_\n| |/ |/ / / _  / _ \`/ -_) __/ _  / _ \\/ __/\n|__/|__/_/\\_,_/\\_, /\__/\\__/____/\\___/\\__/ \n              /___/                       \n`
  )
)

module.exports = (overrides = {}) => ({
  ...overrides,
  devtool: 'inline-source-map',
  mode: overrides.mode === 'development' ? 'development' : 'none',
  entry: ['./src/server.ts', ...(overrides.entry || [])],
  target: 'node',
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?1000']
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'awesome-typescript-loader' },
          {
            loader: 'ifdef-loader',
            options: {
              DEBUG: overrides.mode === 'development',
              PRODUCTION: overrides.mode !== 'development'
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.gql$/,
        use: 'raw-loader'
      }
    ]
  },
  plugins: [
    ...(overrides.plugins || []),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${overrides.mode}"`
      }
    })
  ],
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    plugins: [new TsConfigPathsPlugin()],
    extensions: ['.mjs','.ts', '.js']
  }
})
