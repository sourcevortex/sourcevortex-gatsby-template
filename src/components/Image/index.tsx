import React, { useMemo } from 'react'
import { get } from 'lodash'
import Img from 'gatsby-image'

// Hooks
import useAllFileImage, { AllFileData } from '@Hook/use-all-file-image'

interface ImageProps {
  src: string
  style?: React.CSSProperties
}

const Image: React.FC<ImageProps> = ({ src, style, ...props }) => {
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

  const data = useAllFileImage()
  const match = useMemo(() => findImage(data), [data, src])
  const fluid = get(match, 'childImageSharp.fluid')

  return fluid ? <Img fluid={fluid} Tag="div" {...props} style={style} /> : null
}

Image.defaultProps = {
  style: {},
}

export default Image
