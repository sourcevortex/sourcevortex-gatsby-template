import { useStaticQuery, graphql } from 'gatsby'

export interface EdgesNode {
  id: string
  excerpt: string
  frontmatter: {
    date: string
    slug: string
    title: string
    image: string
    tags: string[]
    badgeColors: string[]
    badgeBackgrounds: string[]
  }
}

interface BlogPosts {
  allMarkdownRemark: {
    edges: {
      node: EdgesNode
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
              tags
              badgeColors
              badgeBackgrounds
            }
          }
        }
      }
    }
  `)
}

export default useBlogPosts
