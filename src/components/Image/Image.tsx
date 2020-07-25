import React, { useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { get } from 'lodash'
import Img from 'gatsby-image'

interface AllFileData {
  allFile: {
    nodes: {
      relativePath: string
    }[]
  }
}

const Image = ({ src, ...props }: { src: string }) => {
  const findImage = (data: AllFileData) => {
    const foundedImg = data.allFile.nodes.find(
      ({ relativePath }) => src === relativePath
    )

    if (!foundedImg) {
      return data.allFile.nodes.find(
        ({ relativePath }) => relativePath === 'generic/default.png'
      )
    }

    return foundedImg
  }

  const data: AllFileData = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "/image/" } } }) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  `)

  const match = useMemo(() => findImage(data), [data, src])
  const fluid = get(match, 'childImageSharp.fluid')

  return fluid ? <Img fluid={fluid} Tag="div" {...props} /> : null
}

export default Image
