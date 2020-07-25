import React from 'react'
import { graphql, Link } from 'gatsby'

// Components
import { DefaultLayout } from '@Component/DefaultLayout'
import { SEO } from '@Component/Seo'
import { Card } from '@Component/Card'

// Styles
import * as S from '@PageStyle/BlogStyles'

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
            image: string
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

      <S.CardContainer>
        {edges.map(({ node }) => (
          <S.StyLink to={node.frontmatter.slug}>
            <Card
              title={node.frontmatter.title}
              subtitle=""
              image={node.frontmatter.image}
            />
          </S.StyLink>
        ))}
      </S.CardContainer>
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
            image
          }
        }
      }
    }
  }
`

export default Blog
