/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  // INI: BlogTemplate Page
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
  // END: BlogTemplate Page

  // INI: Homepage
  createPage({
    path: '/',
    component: require.resolve(`./src/views/Blog/Blog.tsx`),
    context: {},
  })
  // END: Homepage
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@Root': path.resolve(__dirname, 'src'),
        '@Config': path.resolve(__dirname, 'src', 'config'),
        '@Hook': path.resolve(__dirname, 'src', 'hooks'),
        '@View': path.resolve(__dirname, 'src', 'views'),
        '@Page': path.resolve(__dirname, 'src', 'pages'),
        '@Component': path.resolve(__dirname, 'src', 'components'),
      },
    },
  })
}
