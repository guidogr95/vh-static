const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withLess = require('@zeit/next-less')
const withPurgeCss = require('next-purgecss')
// Utils
const { whiteList } = require('./styles/classesWhitelist')

module.exports = withLess(
  withSass(
    withImages(
      // {
      // lessLoaderOptions: {
      //   javascriptEnabled: true
      // }
        withPurgeCss({
            lessLoaderOptions: {
              javascriptEnabled: true
            },
            purgeCssPaths: [
                'pages/**/*',
                'components/**/*'
            ],
                purgeCss: {
                whitelist: () => whiteList,
                whitelistPatterns: () => [/Toastify/, /.*nprogress.*/],
                rejected: true
            }
        })
      // }
      )
  )
)