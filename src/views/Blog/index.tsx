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
    allWpPost: { edges },
  } = useBlogPosts()

  const RenderCard: React.FC<{ node: EdgesNode }> = ({ node }) => {
    const { link, title, categories, featuredImage } = node

    const postImage = get(featuredImage, 'node.sourceUrl', '')
    const text = get(categories, 'nodes.[0].name', null)

    return (
      <S.StyLink key={`blog-post-${link}`} to={`/blog${link}`}>
        <Card
          image={postImage}
          wpImage
          badge={{ text, color: null, background: null }}
          title={title}
          subtitle=""
        />
      </S.StyLink>
    )
  }

  return (
    <DefaultLayout>
      <SEO title="Blog" />
      <S.Title>BLOG</S.Title>
      <S.CardContainer>
        {edges.map(({ node }) => (
          <RenderCard key={`card-${node.id}`} node={node} />
        ))}
        {!edges.length && (
          <S.NotFoundText>Nenhum post encontrado</S.NotFoundText>
        )}
      </S.CardContainer>
    </DefaultLayout>
  )
}

export default Blog
