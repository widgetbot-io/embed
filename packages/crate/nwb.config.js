const baseConfig = require('@widgetbot/scripts/nwb.config')

const config = baseConfig()
config.npm.umd.global = 'Crate'

module.exports = config
