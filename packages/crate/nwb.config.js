const baseConfig = require('../../nwb.config')

const config = baseConfig()
config.npm.umd.global = 'Crate'

module.exports = config
