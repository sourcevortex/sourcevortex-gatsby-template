import React from 'react'
import { graphql, Link } from 'gatsby'

// Components
import DefaultLayout from '@Component/DefaultLayout'
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
      }
    }
  }
}

export default function Template(props: BlogTemplateProps): JSX.Element {
  const {
    data: {
      markdownRemark: {
        frontmatter: { file, date, slug, title, image },
        html,
      },
    },
  } = props
  const fileUrl = file ? repository + file : ''
  return (
    <DefaultLayout page={fileUrl}>
      <S.Container>
        <S.CoverImage src={image} />
        <S.Title>{title}</S.Title>
        <S.PostDate>- {date} -</S.PostDate>
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
      }
    }
  }
`
