const config = require('../gatsby.settings/config')

module.exports = async function (createPage) {
  createPage({
    path: '/',
    component: require.resolve(config.homepage),
    context: {},
  })
}
