const config = require('../gatsby.settings/config')

module.exports = async function (createPage) {
  if (!config.pagesEnabled.about) return
  return await createPage({
    path: '/about',
    component: require.resolve(`../src/views/About/index.tsx`),
    context: {},
  })
}
