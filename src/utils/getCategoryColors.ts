import { get } from 'lodash'
import * as CategoryColors from '@Config/category.colors'
import { ClassifierNode } from '@Hook/use-blog-posts'

type ColorTypes = 'background' | 'color'

/**
 * Get category color setted in 'src/config/category.colors.json
 *
 * @param type
 * @param categories
 * @param slug
 */
export default function getCategoryColor(
  type: ColorTypes,
  categories?: ClassifierNode,
  slug?: string
): string[] | string | null {
  if (categories) {
    return categories.nodes.map(v =>
      get(CategoryColors, `default.${v.slug}.${type}`)
    )
  } else if (slug) {
    return get(CategoryColors, `default.${slug}.${type}`)
  } else {
    return null
  }
}
