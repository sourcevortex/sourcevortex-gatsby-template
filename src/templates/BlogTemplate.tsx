import React from 'react'
import { graphql, Link } from 'gatsby'
import moment from 'moment'
import 'moment/locale/pt-br'

// Components
import DefaultLayout from '@Component/DefaultLayout'
import SEO from '@Component/Seo'
import Badges from '@Component/Badges'
import * as S from '@PageStyle/BlogTemplateStyles'

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
        image: string
        tags: string[]
        badgeColors: string[]
        badgeBackgrounds: string[]
      }
    }
  }
}

export default function Template(props: BlogTemplateProps): JSX.Element {
  const {
    data: {
      markdownRemark: {
        frontmatter: {
          file,
          date,
          title,
          image,
          tags,
          badgeColors,
          badgeBackgrounds,
        },
        html,
      },
    },
  } = props
  const fileUrl = file ? repository + file : ''
  const currentDate = moment(date).locale('pt-br')

  return (
    <DefaultLayout page={fileUrl}>
      <SEO title={title} />
      <S.Container>
        <S.CoverImage src={image} />
        <Badges
          tags={tags}
          badgeColors={badgeColors}
          badgeBackgrounds={badgeBackgrounds}
        />
        <S.Title>{title}</S.Title>
        <S.PostDate>- {currentDate.format('MMMM DD, YYYY')} -</S.PostDate>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </S.Container>
      <br />
      <hr />
      <Link to="/blog">Voltar para o blog</Link>
    </DefaultLayout>
  )
}

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
        tags
        badgeColors
        badgeBackgrounds
      }
    }
  }
`
