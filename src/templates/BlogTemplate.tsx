import React from 'react'
import { graphql } from 'gatsby'

// Components
import { DefaultLayout } from '@Component/DefaultLayout'

// Configs
import { repository } from '@Config/pagesSummary'

interface BlogTemplateProps {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        file: string
        date: string
        slug: string
        title: string
      }
    }
  }
}

export default function Template(props: BlogTemplateProps): JSX.Element {
  const {
    data: {
      markdownRemark: { frontmatter, html },
    },
  } = props
  const fileUrl = frontmatter.file ? repository + frontmatter.file : ''
  return (
    <DefaultLayout page={fileUrl}>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        file
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
