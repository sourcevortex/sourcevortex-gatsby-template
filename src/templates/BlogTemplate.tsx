import React from 'react'
import { graphql, Link } from 'gatsby'
import moment from 'moment'
import 'moment/locale/pt-br'

// Components
import DefaultLayout from '@Component/DefaultLayout'
import SEO from '@Component/Seo'
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

  const renderBadges = (): JSX.Element => {
    if (!tags || !Array.isArray(tags) || tags.length === 0) {
      return <React.Fragment />
    }

    const slicedTags = tags.slice(0, 2)
    const remainderTags = tags.filter(x => !slicedTags.includes(x))

    return (
      <S.BadgeContainer>
        {slicedTags.map((tag, index) => (
          <S.Badge background={badgeBackgrounds[index]}>
            <S.BadgeText txtColor={badgeColors[index]}>{tag}</S.BadgeText>
          </S.Badge>
        ))}
        {remainderTags.length > 0 && (
          <S.Badge>
            <S.BadgeMoreTooltip
              title={
                <React.Fragment>
                  <S.MoreTooltipContent>...</S.MoreTooltipContent>
                  {remainderTags.map(t => (
                    <S.MoreTooltipContent>{t}</S.MoreTooltipContent>
                  ))}
                </React.Fragment>
              }
            >
              <S.BadgeText>+</S.BadgeText>
            </S.BadgeMoreTooltip>
          </S.Badge>
        )}
      </S.BadgeContainer>
    )
  }

  return (
    <DefaultLayout page={fileUrl}>
      <SEO title={title} />
      <S.Container>
        <S.CoverImage src={image} />
        {renderBadges()}
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
        date(formatString: "MMMM DD, YYYY")
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
