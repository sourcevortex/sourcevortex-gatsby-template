const config = require('../gatsby.settings/config')

module.exports = async function (createPage) {
  if (!config.pagesEnabled.about) return
  createPage({
    path: '/about',
    component: require.resolve(`../src/views/About/About.tsx`),
    context: {},
  })
}
