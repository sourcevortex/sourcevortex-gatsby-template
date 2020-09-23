import { DomElement } from 'htmlparser2'

/**
 * Get current code language
 *
 * @param node
 */
export const getLanguage = (node: DomElement): string | null => {
  const { attribs } = node
  const className = attribs.class
  if (className != null) {
    const language = className.match(/language-.*/)
    return (language && language[0].replace('language-', '')) ?? className
  }
  return null
}

/**
 * Get code from body
 *
 * @param node
 */
export const getCode = (node: DomElement): DomElement[] => {
  if (node.children.length > 0 && node.children[0].name === 'code') {
    return node.children[0].children
  } else {
    return node.children
  }
}
