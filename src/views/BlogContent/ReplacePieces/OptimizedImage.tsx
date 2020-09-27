import React from 'react'
import { get } from 'lodash'
import { DomElement } from 'htmlparser2'
import { getFigure } from '@Util/parseImage'
import { PostImage } from '@Component/PostImage'

const OptimizedImage: React.FC<{ node: DomElement }> = ({ node }) => {
  if (node.name === 'figure') {
    const image = getFigure(node, 'img')
    const caption = getFigure(node, 'figcaption')
    const captionData = get(caption, 'children[0].data', null)
    if (image != null) {
      return (
        <>
          <div className="optimized-image">
            <PostImage
              src={image.attribs.src}
              alt={image.attribs.alt}
              width={image.attribs.width}
            />
            {captionData && <figcaption>{captionData}</figcaption>}
          </div>
        </>
      )
    }
  }
}

export default OptimizedImage
