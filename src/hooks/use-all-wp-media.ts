import { useStaticQuery, graphql } from 'gatsby'

export interface AllWpMediaData {
  allWpMediaItem: {
    edges: {
      node: {
        sourceUrl: string
        localFile: {
          publicURL: string
          childImageSharp: {
            fluid: any
          }
        }
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
              publicURL
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
