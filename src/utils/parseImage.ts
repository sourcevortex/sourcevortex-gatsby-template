import { DomElement } from 'htmlparser2'

type NodeType = 'img' | 'figcaption'

/**
 * Get image from body
 *
 * @param node
 * @param nodeType
 */
export const getFigure = (node: DomElement, nodeType: NodeType): DomElement => {
  if (node.name === nodeType) {
    return node
  } else if (node.children != null) {
    for (let index = 0; index < node.children.length; index++) {
      let image = getFigure(node.children[index], nodeType)
      if (image != null) return image
    }
  }
}