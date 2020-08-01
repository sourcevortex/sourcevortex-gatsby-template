/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Routing/pages
const BlogTemplate = require('./gatsby.pages/BlogTemplate')
const Homepage = require('./gatsby.pages/Homepage')
const Portfolio = require('./gatsby.pages/Portfolio')

// Webpack configs
const webpackAlises = require('./gatsby.settings/webpack.aliases')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Main pages
  Homepage(createPage)
  BlogTemplate(createPage, graphql, reporter)

  // Optional pages
  Portfolio(createPage)
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  webpackAlises(actions)
}
