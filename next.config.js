const withPlugins = require('next-compose-plugins')
const css = require('@zeit/next-css')
const ts = require('@zeit/next-typescript')

module.exports = {
	...withPlugins([ts, css]),
	target: 'serverless'
}
