import React from 'react'
import { graphql } from 'gatsby'
import Template, { BlogTemplateProps } from '@View/BlogTemplate'

const BlogTemplate: React.FC<BlogTemplateProps> = ({ data }) => {
  return <Template data={data} />
}

export default BlogTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        file
        date
        slug
        title
        image
        imageAlt
        tags
        badgeColors
        badgeBackgrounds
      }
    }
  }
`
