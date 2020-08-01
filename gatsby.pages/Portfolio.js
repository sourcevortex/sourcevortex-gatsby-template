const config = require('../gatsby.settings/config')

module.exports = async function (createPage) {
  if (!config.pagesEnabled.portfolio) return
  createPage({
    path: '/portfolio',
    component: require.resolve(`../src/views/Portfolio/Portfolio.tsx`),
    context: {},
  })
}
