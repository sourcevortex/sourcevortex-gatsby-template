const config = require('../gatsby.settings/config')

module.exports = async function (createPage) {
  return await createPage({
    path: '/',
    component: require.resolve(config.homepage),
    context: {},
  })
}
