module.exports = async ({ config }) => {
  config.resolve.extensions.push('.ts', '.tsx')

  config.module.rules.push({
    test: /.ts(x)?$/,
    use: 'awesome-typescript-loader'
  })

  return config
}
