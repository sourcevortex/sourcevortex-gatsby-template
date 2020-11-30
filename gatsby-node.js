/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// Routing/pages
const About = require('./gatsby.pages/About')
const BlogTemplate = require('./gatsby.pages/BlogTemplate')
const Homepage = require('./gatsby.pages/Homepage')
const Portfolio = require('./gatsby.pages/Portfolio')

// Webpack configs
const webpackAliases = require('./gatsby.settings/webpack.aliases')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Main pages
  await Homepage(createPage)
  await BlogTemplate(createPage, graphql, reporter)

  // Optional pages
  await About(createPage)
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  webpackAliases(actions)
}
