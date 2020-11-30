const config = require('../gatsby.settings/config')

module.exports = async function (createPage) {
  if (!config.pagesEnabled.portfolio) return
  return await createPage({
    path: '/portfolio',
    component: require.resolve(`../src/views/Portfolio/index.tsx`),
    context: {},
  })
}
