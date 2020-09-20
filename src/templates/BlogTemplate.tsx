import React from 'react'
import { graphql } from 'gatsby'
import Template, { BlogTemplateProps } from '@View/BlogTemplate'

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
