import React from 'react'
import { DomElement } from 'htmlparser2'

import CodeBlock from './CodeBlock'
import OptimizedImage from '@View/BlogContent/ReplacePieces/OptimizedImage'

export default function (node: DomElement) {
  switch (node.name) {
    case 'pre':
      return <CodeBlock node={node} />
    case 'figure':
      return <OptimizedImage node={node} />
  }
}