import React from 'react'
import { get } from 'lodash'
import Img from 'gatsby-image'

import useAllWpMedia from '@Hook/use-all-wp-media'

export interface PostImageProps {
  src: string
  alt?: string
  width?: string
}

export const PostImage: React.FC<PostImageProps> = ({ src, alt, width }) => {
  const { allWpMediaItem } = useAllWpMedia()
  const originalSource = src.replace(
    /^(http?s:\/\/.+?\/.+?)-(\d+x\d+)\.(.+?)$/g,
    '$1.$3'
  )
  const image = allWpMediaItem.edges.find(
    ({ node }) => {
      return node.sourceUrl === originalSource
    }
  )
  const fluidImage = get(image, 'node.localFile.childImageSharp.fluid', null)
  return fluidImage ? (
    <Img
      fluid={fluidImage}
      alt={alt}
      style={{
        width: width ? width + 'px' : '100%',
        maxWidth: '100%',
      }}
    />
  ) : (
    <img src={src} alt={alt} style={{ width: width ? width : '100%' }} />
  )
}
