import React from 'react'

// Components
import * as S from './BadgesStyles'

// Interfaces
interface BadgeProps {
  tags: string[]
  badgeColors?: string[]
  badgeBackgrounds?: string[]
}

const Badges: React.FC<BadgeProps> = props => {
  const { tags, badgeColors, badgeBackgrounds } = props

  if (!tags || !Array.isArray(tags) || tags.length === 0) {
    return <React.Fragment />
  }

  const slicedTags = tags.slice(0, 2)
  const remainderTags = tags.filter(x => !slicedTags.includes(x))

  return (
    <S.Container>
      {slicedTags.map((tag, index) => (
        <S.Badge key={`badge-${tag}`} background={badgeBackgrounds[index]}>
          <S.BadgeText txtcolor={badgeColors[index]}>{tag}</S.BadgeText>
        </S.Badge>
      ))}
      {remainderTags.length > 0 && (
        <S.Badge>
          <S.BadgeMoreTooltip
            title={
              <React.Fragment>
                <S.MoreTooltipContent>...</S.MoreTooltipContent>
                {remainderTags.map(t => (
                  <S.MoreTooltipContent key={`rem-badge-${t}`}>
                    {t}
                  </S.MoreTooltipContent>
                ))}
              </React.Fragment>
            }
          >
            <S.BadgeText>+</S.BadgeText>
          </S.BadgeMoreTooltip>
        </S.Badge>
      )}
    </S.Container>
  )
}

export default Badges
