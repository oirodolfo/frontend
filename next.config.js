const withImages = require('next-images')

module.exports = withImages({
  target: 'serverless',
  env: {
    API: process.env.API
  }
})
