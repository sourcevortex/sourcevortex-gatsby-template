const path = require('path')

module.exports = function (actions) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@Root': path.resolve(__dirname, '..', 'src'),
        '@Config': path.resolve(__dirname, '..', 'src', 'config'),
        '@Hook': path.resolve(__dirname, '..', 'src', 'hooks'),
        '@View': path.resolve(__dirname, '..', 'src', 'views'),
        '@Page': path.resolve(__dirname, '..', 'src', 'pages'),
        '@Component': path.resolve(__dirname, '..', 'src', 'components'),
      },
    },
  })
}
