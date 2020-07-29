import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'

// Hooks
import useSiteMetadata from '@Hook/use-site-metadata'

interface SEOProps {
  description?: string
  lang?: string
  meta?: any[]
  title: string
}

const SEO: React.FC<SEOProps> = props => {
  const { description, lang, meta, title } = props
  const site = useSiteMetadata()
  const { pathname } = useLocation()
  const siteUrlWithPath = site.siteMetadata.siteUrl + pathname

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
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
          content: site.siteMetadata.siteUrl + site.siteMetadata.image,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
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
