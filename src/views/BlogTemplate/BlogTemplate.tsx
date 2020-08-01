import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import 'moment/locale/pt-br'

// Components
import DefaultLayout from '@Component/DefaultLayout'
import SEO from '@Component/Seo'
import Badges from '@Component/Badges'
import * as S from './BlogTemplateStyles'

// Configs
import theme from '@Config/template.config'

export interface BlogTemplateProps {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        file: string
        date: string
        slug: string
        title: string
        image: string
        imageAlt: string
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
          imageAlt,
          tags,
          badgeColors,
          badgeBackgrounds,
        },
        html,
      },
    },
  } = props
  const fileUrl = file ? theme.blogTemplate.repository + file : ''
  const currentDate = moment(date).locale('pt-br')

  return (
    <DefaultLayout page={fileUrl}>
      <SEO title={title} image={image} imageAlt={imageAlt} />
      <S.Container>
        <S.CoverImage src={image} />
        <Badges
          tags={tags}
          badgeColors={badgeColors}
          badgeBackgrounds={badgeBackgrounds}
        />
        <S.Title>{title}</S.Title>
        <S.PostDate>
          - {currentDate.format('MMMM DD, YYYY | HH:mm')} -
        </S.PostDate>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </S.Container>
      <br />
      <hr />
      <Link to="/blog">Voltar para o blog</Link>
    </DefaultLayout>
  )
}
