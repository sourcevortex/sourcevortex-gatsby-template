import React from 'react'
import { get } from 'lodash'
import moment from 'moment'
import 'moment/locale/pt-br'
import parse from 'html-react-parser'

// Utils
import getCategoryColors from '@Util/getCategoryColors'

// Components
import BlogLayout from '@Layout/BlogLayout'
import SEO from '@Component/Seo'
import Badges from '@Component/Badges'
import BackLink from '@Component/BackLink'
// import ButtonEdit from '@Component/ButtonEdit'
import ReplacePieces from './ReplacePieces'
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
  const metaImage = get(featuredImage, 'node.localFile.publicURL', '')
  const metaImageAlt = get(featuredImage, 'node.altText', '')

  const tags = categories.nodes.map(v => v.name)
  // prettier-ignore
  const badgeBackgrounds = getCategoryColors('background', categories) as string[]
  const badgeColors = getCategoryColors('color', categories) as string[]

  // const fileUrl = file ? repository + file : ''
  const currentDate = moment(date).locale('pt-br')

  return (
    <BlogLayout>
      <SEO
        title={title}
        image={metaImage}
        imageAlt={metaImageAlt}
        description={excerpt}
      />
      <S.Container>
        <S.CoverContainer>
          <S.CoverImage src={postImage} wordpress />
          <S.TitleContainer>
            <S.Title>{title}</S.Title>
            <Badges
              tags={tags}
              badgeBackgrounds={badgeBackgrounds}
              badgeColors={badgeColors}
            />
          </S.TitleContainer>
        </S.CoverContainer>
        <S.PostInfoContainer>
          <S.PostInfoSubContainer>
            <S.PostDateIcon />
            <S.PostDate>
              {currentDate.format('MMMM DD, YYYY')}
            </S.PostDate>
          </S.PostInfoSubContainer>
        </S.PostInfoContainer>
        <S.PostContainer>
          {content && parse(content, { replace: ReplacePieces })}
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
