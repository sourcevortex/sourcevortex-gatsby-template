import { useStaticQuery, graphql } from 'gatsby'

export interface AllFileData {
  allFile: {
    nodes: {
      relativePath: string
    }[]
  }
}

const useAllFileImage = (): AllFileData => {
  return useStaticQuery<AllFileData>(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "/image/" } } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  `)
}

export default useAllFileImage
