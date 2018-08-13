module.exports = () => ({
  type: 'react-component',
  npm: {
    esModules: false,
    umd: {
      entry: './src/umd.ts'
    }
  },
  webpack: {
    extra: {
      resolve: {
        extensions: ['.ts', '.tsx', '.js']
      }
    },
    config(config) {
      config.module.rules.push({
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader']
      })

      config.entry = config.entry.map(
        path => (path.endsWith('index.js') ? path.replace(/js$/, 'ts') : path)
      )

      const outputDirs = config.output.filename.split('/')
      config.output.filename = outputDirs[outputDirs.length - 1]

      return config
    }
  }
})
