/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const BlogPostTemplate = require.resolve(`./src/templates/BlogTemplate.tsx`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: BlogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@Root': path.resolve(__dirname, 'src'),
        '@Config': path.resolve(__dirname, 'src', 'config'),
        '@Hook': path.resolve(__dirname, 'src', 'hooks'),
        '@Page': path.resolve(__dirname, 'src', 'pages'),
        '@Component': path.resolve(__dirname, 'src', 'components'),
        '@Util': path.resolve(__dirname, 'src', 'utils'),
        '@Duck': path.resolve(__dirname, 'src', 'store', 'ducks'),
        '@PageStyle': path.resolve(__dirname, 'src', 'pagesStyles'),
      },
    },
  })
}
