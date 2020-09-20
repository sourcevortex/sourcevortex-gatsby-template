module.exports = async function (createPage, graphql, reporter) {
  const BlogPostTemplate = require.resolve(`../src/templates/BlogTemplate.tsx`)
  const {
    data: {
      allWpContentNode: { nodes: contentNodes },
    },
  } = await graphql(/* GraphQL */ `
    query ALL_CONTENT_NODES {
      allWpContentNode(
        sort: { fields: modifiedGmt, order: DESC }
        filter: { nodeType: { ne: "MediaItem" } }
      ) {
        nodes {
          nodeType
          uri
          id
        }
      }
    }
  `)

  await Promise.all(
    contentNodes.map(async (node, i) => {
      const { uri, id } = node

      console.log(`debug:here:`, uri)

      await createPage({
        component: BlogPostTemplate,
        path: uri,
        context: {
          id,
        },
      })
    })
  )
}
