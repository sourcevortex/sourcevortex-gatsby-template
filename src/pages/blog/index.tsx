import React from 'react'
import { get } from 'lodash'

// Components
import DefaultLayout from '@Component/DefaultLayout'
import SEO from '@Component/Seo'
import Card from '@Component/Card'

// Styles
import * as S from '@PageStyle/BlogStyles'

// Hooks
import useBlogPosts, { EdgesNode } from '@Hook/use-blog-posts'

const Blog: React.FC = () => {
  const {
    allMarkdownRemark: { edges },
  } = useBlogPosts()

  const renderCard = (node: EdgesNode) => {
    const {
      frontmatter: { slug, title, image, tags, badgeColors, badgeBackgrounds },
    } = node

    const text = get(tags, '[0]', null)
    const color = get(badgeColors, '[0]', null)
    const background = get(badgeBackgrounds, '[0]', null)

    return (
      <S.StyLink to={node.frontmatter.slug}>
        <Card
          title={node.frontmatter.title}
          subtitle=""
          image={node.frontmatter.image}
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
        {edges.map(({ node }) => renderCard(node))}
      </S.CardContainer>
    </DefaultLayout>
  )
}

export default Blog
