module.exports = async function (createPage, graphql, reporter) {
  const BlogPostTemplate = require.resolve(`../src/templates/BlogTemplate.tsx`)
  const {
    data: {
      allWpPost: { nodes: contentNodes },
    },
  } = await graphql(/* GraphQL */ `
    query ALL_CONTENT_NODES {
      allWpPost(
        sort: { fields: dateGmt, order: DESC }
      ) {
        nodes {
          uri
          id
        }
      }
    }
  `)

  await Promise.all(
    contentNodes.map(async (node, i) => {
      const { uri, id } = node

      return await createPage({
        component: BlogPostTemplate,
        path: `/blog${uri}`,
        context: {
          id,
        },
      })
    })
  )
}
