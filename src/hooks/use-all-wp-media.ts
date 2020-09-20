import { useStaticQuery, graphql } from 'gatsby'

export interface AllWpMediaData {
  allWpMediaItem: {
    edges: {
      node: {
        sourceUrl: string
      }
    }[]
  }
}

const useAllWpMedia = (): AllWpMediaData => {
  return useStaticQuery<AllWpMediaData>(graphql`
    query {
      allWpMediaItem {
        edges {
          node {
            sourceUrl
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  `)
}

export default useAllWpMedia
