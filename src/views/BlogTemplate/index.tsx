import React from 'react'
import { get } from 'lodash'
import moment from 'moment'
import 'moment/locale/pt-br'
import { DomElement } from 'htmlparser2'
import parse, { domToReact } from 'html-react-parser'

// Components
import BlogLayout from '@Layout/BlogLayout'
import SEO from '@Component/Seo'
import Badges from '@Component/Badges'
import PostCode from '@Component/PostCode'
import BackLink from '@Component/BackLink'
import ButtonEdit from '@Component/ButtonEdit'
import * as S from '@Style/BlogTemplateStyles'

// Interfaces
import { BlogTemplateProps } from '@Root/templates/BlogTemplate'

// Configs
import theme from '@Config/template.config'

export default function Template(props: BlogTemplateProps): JSX.Element {
  const {
    data: {
      wpPost: { title, excerpt, content, date, featuredImage, categories },
    },
  } = props

  const {
    blogTemplate: { url: blogUrl },
  } = theme

  const postImage = get(featuredImage, 'node.sourceUrl', '')

  // const fileUrl = file ? repository + file : ''
  const currentDate = moment(date).locale('pt-br')

  const getLanguage = (node: DomElement) => {
    const { attribs } = node
    const className = attribs.class
    if (className != null) {
      const language = className.match(/language-.*/)
      return (language && language[0].replace('language-', '')) ?? className
    }
    return null
  }

  const getCode = (node: DomElement) => {
    if (node.children.length > 0 && node.children[0].name === 'code') {
      return node.children[0].children
    } else {
      return node.children
    }
  }

  const replaceCode = (node: DomElement) => {
    if (node.name === 'pre') {
      return (
        node.children.length > 0 && (
          <PostCode language={getLanguage(node)}>
            {domToReact(getCode(node))}
          </PostCode>
        )
      )
    }
  }

  return (
    <BlogLayout>
      <SEO
        title={title}
        // image={featuredImage.node.sourceUrl}
        // imageAlt={imageAlt}
        description={excerpt}
      />
      <S.Container>
        <S.CoverContainer>
          <S.CoverImage src={postImage} wordpress />
          <S.TitleContainer>
            <S.Title>{title}</S.Title>
            <Badges
              tags={categories.nodes.map(v => v.name)}
              // badgeColors={badgeColors}
              // badgeBackgrounds={badgeBackgrounds}
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
        <S.PostContainer>
          {parse(content, { replace: replaceCode })}
        </S.PostContainer>
      </S.Container>
      <S.FooterContainer>
        <S.FooterButtonsContainer>
          <S.FooterButtonsContainerLeft>
            <BackLink tooltip="Voltar para o blog" url={blogUrl} />
          </S.FooterButtonsContainerLeft>
          {/* <S.FooterButtonsContainerRight>
            {fileUrl && <ButtonEdit tooltip="Editar no github" url={fileUrl} />}
          </S.FooterButtonsContainerRight> */}
        </S.FooterButtonsContainer>
      </S.FooterContainer>
    </BlogLayout>
  )
}
