/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Routing/pages
const BlogTemplate = require('./gatsby.pages/BlogTemplate')
const Homepage = require('./gatsby.pages/Homepage')

// Webpack configs
const webpackAlises = require('./gatsby.settings/webpack.aliases')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  BlogTemplate(createPage, graphql, reporter)
  Homepage(createPage)
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  webpackAlises(actions)
}
