import React from 'react'
import { DomElement } from 'htmlparser2'
import { domToReact } from 'html-react-parser'
import PostCode from '@Component/PostCode'
import { getCode, getLanguage } from '@Util/parseCodeBlock'

const CodeBlock: React.FC<{ node: DomElement}> = ({ node }) => {
  if (node.name === 'pre') {
    return (
      node.children.length > 0 && (
        <PostCode language={getLanguage(node)}>
          {domToReact(getCode(node))}
        </PostCode>
      )
    )
  }
}

export default CodeBlock