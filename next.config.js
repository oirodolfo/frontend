const withPlugins = require('next-compose-plugins')
const stylus = require('@zeit/next-stylus')
const typescript = require('@zeit/next-typescript')

module.exports = withPlugins(
    [stylus, typescript]
)