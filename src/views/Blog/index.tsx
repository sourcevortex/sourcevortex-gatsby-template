import React from 'react'
import { get } from 'lodash'

// Utils
import getCategoryColors from '@Util/getCategoryColors'

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
    const categoryName = get(categories, 'nodes.[0].name', null)
    const categorySlug = get(categories, 'nodes.[0].slug', null)
    const background = getCategoryColors('background', null, categorySlug)
    const color = getCategoryColors('color', null, categorySlug)

    return (
      <S.StyLink key={`blog-post-${link}`} to={`/blog${link}`}>
        <Card
          image={postImage}
          wpImage
          badge={{
            text: categoryName,
            background,
            color,
          }}
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
