import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import 'moment/locale/pt-br'

// Components
import BlogLayout from '@Layout/BlogLayout'
import SEO from '@Component/Seo'
import Badges from '@Component/Badges'
import BackLink from '@Component/BackLink'
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

  const {
    blogTemplate: { repository, url: blogUrl },
  } = theme

  const fileUrl = file ? repository + file : ''
  const currentDate = moment(date).locale('pt-br')

  return (
    <BlogLayout page={fileUrl}>
      <SEO title={title} image={image} imageAlt={imageAlt} />
      <S.Container>
        <S.CoverContainer>
          <S.CoverImage src={image} />
          <S.TitleContainer>
            <S.Title>{title}</S.Title>
            <Badges
              tags={tags}
              badgeColors={badgeColors}
              badgeBackgrounds={badgeBackgrounds}
            />
          </S.TitleContainer>
        </S.CoverContainer>
        <S.PostInfoContainer>
          <S.PostInfoSubContainer>
            <S.PostDateIcon />
            <S.PostDate>
              {currentDate.format('MMMM DD, YYYY | HH:mm')}
            </S.PostDate>
          </S.PostInfoSubContainer>
        </S.PostInfoContainer>
        <S.PostContainer dangerouslySetInnerHTML={{ __html: html }} />
      </S.Container>
      <S.FooterContainer>
        <BackLink tooltip="Voltar para o blog" url={blogUrl} />
      </S.FooterContainer>
    </BlogLayout>
  )
}
