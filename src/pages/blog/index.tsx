import React from 'react'
import { graphql, Link } from 'gatsby'

// Components
import { DefaultLayout } from '@Component/DefaultLayout'
import { SEO } from '@Component/Seo'
import { Card } from '@Component/Card'
import { StyledCardContainer, StyledLink } from './BlogStyles'

// Configs
import { getPage, PagesSummaryEnum as Pg } from '@Config/pagesSummary'

interface BlogProps {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: string
          excerpt: string
          frontmatter: {
            date: string
            slug: string
            title: string
          }
        }
      }[]
    }
  }
}

const Blog: React.FC<BlogProps> = (props: BlogProps) => {
  const {
    data: {
      allMarkdownRemark: { edges },
    },
  } = props

  return (
    <DefaultLayout page={getPage(Pg.BLOG_PAGE)}>
      <SEO title="Blog page" />
      <h1>BLOG: Em desenvolvimento</h1>
      <h2>...todo layout será melhorado em breve</h2>

      <StyledCardContainer>
        {edges.map(({ node }) => (
          <StyledLink to={node.frontmatter.slug}>
            <Card title={node.frontmatter.title} subtitle="" />
          </StyledLink>
        ))}
      </StyledCardContainer>
      {/* Just ignore this rsrs... */}
      <br />
      <br />
      <br />
      {/* :P */}
    </DefaultLayout>
  )
}

export const pageQuery = graphql`
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
          }
        }
      }
    }
  }
`

export default Blog
