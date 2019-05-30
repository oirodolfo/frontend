const withCss = require('@zeit/next-css')
const withTypeScript = require('@zeit/next-typescript')

module.exports = withTypeScript(
	withCss({
		target: 'serverless'
	})
)
