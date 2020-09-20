import { useStaticQuery, graphql } from 'gatsby'

export interface ClassifierNode {
  nodes: {
    slug: string
    name: string
    link: string
  }[]
}

export interface EdgesNode {
  id: string
  excerpt: string
  slug: string
  link: string
  date: string
  title: string
  categories: ClassifierNode
  tags: ClassifierNode
}

interface BlogPosts {
  allWpPost: {
    edges: {
      node: EdgesNode
    }[]
  }
}

const useBlogPostsWP = (): BlogPosts => {
  return useStaticQuery<BlogPosts>(graphql`
    query {
      allWpPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            id
            slug
            link
            date
            title
            excerpt
            categories {
              nodes {
                slug
                name
                link
              }
            }
            tags {
              nodes {
                slug
                name
                link
              }
            }
          }
        }
      }
    }
  `)
}

export default useBlogPostsWP
