import React, { useMemo } from 'react'
import { get } from 'lodash'
import Img from 'gatsby-image'

// Hooks
import useAllFileImage, { AllFileData } from '@Hook/use-all-file-image'

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

  const data = useAllFileImage()
  const match = useMemo(() => findImage(data), [data, src])
  const fluid = get(match, 'childImageSharp.fluid')

  return fluid ? <Img fluid={fluid} Tag="div" {...props} /> : null
}

export default Image
