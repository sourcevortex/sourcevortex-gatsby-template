import { useStaticQuery, graphql } from 'gatsby'

export interface AllWpMediaData {
  allWpMediaItem: {
    edges: {
      node: {
        sourceUrl: string
        localFile: {
          publicURL: string
          childImageSharp: {
            gatsbyImageData: any
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
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  `)
}

export default useAllWpMedia
