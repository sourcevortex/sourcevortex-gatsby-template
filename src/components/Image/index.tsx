import React, { useMemo } from 'react'
import { get } from 'lodash'
import Img from 'gatsby-image'

// Hooks
import useAllFileImage, { AllFileData } from '@Hook/use-all-file-image'
import useAllWpMedia, { AllWpMediaData } from '@Hook/use-all-wp-media'

interface ImageProps {
  src: string
  wordpress?: boolean
  style?: React.CSSProperties
}

const Image: React.FC<ImageProps> = ({ src, wordpress, style, ...props }) => {
  const findImage = (data: AllFileData, dataWP: AllWpMediaData) => {
    let foundedImg = null

    if (!wordpress) {
      foundedImg = data.allFile.nodes.find(
        ({ relativePath }) => src === relativePath
      )
      if (foundedImg) {
        return get(foundedImg, 'childImageSharp.fluid')
      }
    } else {
      foundedImg = dataWP.allWpMediaItem.edges.find(
        ({ node: { sourceUrl } }) => src === sourceUrl
      )

      if (foundedImg) {
        return get(foundedImg, 'node.localFile.childImageSharp.fluid')
      }
    }

    if (!foundedImg) {
      return get(
        data.allFile.nodes.find(
          ({ relativePath }) => relativePath === 'generic/default.png'
        ),
        'childImageSharp.fluid'
      )
    }
  }

  const data = useAllFileImage()
  const dataWP = useAllWpMedia()
  const fluid = useMemo(() => findImage(data, dataWP), [data, dataWP, src])

  return fluid ? <Img fluid={fluid} Tag="div" {...props} style={style} /> : null
}

Image.defaultProps = {
  wordpress: false,
  style: {},
}

export default Image
