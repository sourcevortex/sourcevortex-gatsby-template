import React from 'react'
import { get } from 'lodash'

// Components
import DefaultLayout from '@Layout/DefaultLayout'
import SEO from '@Component/Seo'
import Card from '@Component/Card'
import * as S from '@Style/BlogStyles'

// Hooks
import useBlogPosts, { EdgesNode } from '@Hook/use-blog-posts'

const Blog: React.FC = () => {
  const {
    allMarkdownRemark: { edges },
  } = useBlogPosts()

  const RenderCard: React.FC<{ node: EdgesNode }> = ({ node }) => {
    const {
      frontmatter: { slug, title, image, tags, badgeColors, badgeBackgrounds },
    } = node

    const text = get(tags, '[0]', null)
    const color = get(badgeColors, '[0]', null)
    const background = get(badgeBackgrounds, '[0]', null)

    return (
      <S.StyLink key={`blog-post-${slug}`} to={slug}>
        <Card
          title={title}
          subtitle=""
          image={image}
          badge={{ text, color, background }}
        />
      </S.StyLink>
    )
  }

  return (
    <DefaultLayout>
      <SEO title="Blog" />
      <h1>BLOG</h1>
      <S.CardContainer>
        {edges.map(({ node }) => (
          <RenderCard node={node} />
        ))}
        {!edges.length && (
          <S.NotFoundText>Nenhum post encontrado</S.NotFoundText>
        )}
      </S.CardContainer>
    </DefaultLayout>
  )
}

export default Blog
