const path = require('path')

module.exports = function (actions) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@Root': path.resolve(__dirname, '..', 'src'),
        '@Config': path.resolve(__dirname, '..', 'src', 'config'),
        '@Hook': path.resolve(__dirname, '..', 'src', 'hooks'),
        '@Style': path.resolve(__dirname, '..', 'src', 'styles'),
        '@Layout': path.resolve(__dirname, '..', 'src', 'layouts'),
        '@View': path.resolve(__dirname, '..', 'src', 'views'),
        '@Page': path.resolve(__dirname, '..', 'src', 'pages'),
        '@Component': path.resolve(__dirname, '..', 'src', 'components'),
        '@Util': path.resolve(__dirname, '..', 'src', 'utils'),
      },
    },
  })
}
