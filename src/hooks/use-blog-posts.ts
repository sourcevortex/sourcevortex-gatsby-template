import { useStaticQuery, graphql } from 'gatsby'

interface BlogPosts {
  allMarkdownRemark: {
    edges: {
      node: {
        id: string
        excerpt: string
        frontmatter: {
          date: string
          slug: string
          title: string
          image: string
        }
      }
    }[]
  }
}

const useBlogPosts = (): BlogPosts => {
  return useStaticQuery<BlogPosts>(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
              title
              image
            }
          }
        }
      }
    }
  `)
}

export default useBlogPosts
