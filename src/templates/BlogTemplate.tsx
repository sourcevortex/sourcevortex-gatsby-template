import React from 'react'
import { graphql } from 'gatsby'
import Template from '@View/BlogContent'

export interface FeaturedImage {
  node: {
    sourceUrl: string
    altText: string
    localFile: {
      publicURL: string
    }
  }
}

export interface ClassifierNode {
  nodes: {
    slug: string
    name: string
    link: string
  }[]
}

export interface BlogTemplateProps {
  data: {
    wpPost: {
      title: string
      excerpt: string
      content: string
      date: string
      featuredImage: FeaturedImage
      categories: ClassifierNode
    }
  }
}

const BlogTemplateWP: React.FC<BlogTemplateProps> = ({ data }) => {
  return <Template data={data} />
}

export default BlogTemplateWP

export const pageQuery = graphql`
  query post($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      excerpt
      content
      date
      featuredImage {
        node {
          sourceUrl
          altText
          localFile {
            publicURL
          }
        }
      }
      categories {
        nodes {
          slug
          name
          link
        }
      }
    }
  }
`
