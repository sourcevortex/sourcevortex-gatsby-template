import React from 'react'

// Components
import DefaultLayout from '@Component/DefaultLayout'
import SEO from '@Component/Seo'
import Card from '@Component/Card'

// Styles
import * as S from '@PageStyle/BlogStyles'

// Hooks
import useBlogPosts from '@Hook/use-blog-posts'

const Blog: React.FC = () => {
  const {
    allMarkdownRemark: { edges },
  } = useBlogPosts()

  return (
    <DefaultLayout>
      <SEO title="Blog" />
      <h1>BLOG</h1>

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
    </DefaultLayout>
  )
}

export default Blog
