import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'

// Hooks
import useSiteMetadata from '@Hook/use-site-metadata'

interface SEOProps {
  title: string
  description?: string
  lang?: string
  meta?: any[]
  image?: string
  imageAlt?: string;
}

const SEO: React.FC<SEOProps> = props => {
  const { title, description, lang, meta, image, imageAlt } = props
  const { pathname } = useLocation()
  const { siteMetadata } = useSiteMetadata()

  const siteUrlWithPath = siteMetadata.siteUrl + pathname
  const metaDescription = description || siteMetadata.description
  const siteImg = image
    ? siteMetadata.siteUrl + `/images/${image}`
    : siteMetadata.siteUrl + siteMetadata.image;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: siteUrlWithPath,
        },
        {
          property: `og:image`,
          content: siteImg,
        },
        {
          property: `og:image:alt`,
          content: imageAlt ? imageAlt : siteMetadata.imageAlt,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          propery: `fb:app_id`,
          content: ``,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO
