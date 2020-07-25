import { useStaticQuery, graphql } from 'gatsby'

interface SiteData {
  siteMetadata: {
    title: string
    description: string
    author: string
    image: string
  }
}

const useSiteMetadata = (): SiteData => {
  const { site }: { site: SiteData } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
          }
        }
      }
    `
  )
  return site
}

export default useSiteMetadata
