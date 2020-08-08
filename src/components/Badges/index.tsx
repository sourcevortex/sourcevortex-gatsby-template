import React from 'react'

// Components
import * as S from '@Style/BadgesStyles'

// Interfaces
interface BadgeProps {
  tags: string[]
  badgeColors?: string[]
  badgeBackgrounds?: string[]
}

const Badges: React.FC<BadgeProps> = props => {
  const { tags, badgeColors, badgeBackgrounds } = props
  const [popAnchor, setPopAnchor] = React.useState<HTMLDivElement | null>(null)

  if (!tags || !Array.isArray(tags) || tags.length === 0) {
    return <React.Fragment />
  }

  const slicedTags = tags.slice(0, 2)
  const remainderTags = tags.filter(x => !slicedTags.includes(x))

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setPopAnchor(event.currentTarget)
  }

  const handleClose = () => {
    setPopAnchor(null)
  }

  const open = Boolean(popAnchor)
  const id = open ? 'simple-popover' : undefined

  return (
    <S.Container>
      {slicedTags.map((tag, index) => (
        <S.Badge key={`badge-${tag}`} background={badgeBackgrounds[index]}>
          <S.BadgeText txtcolor={badgeColors[index]}>{tag}</S.BadgeText>
        </S.Badge>
      ))}
      {remainderTags.length > 0 && (
        <>
          <S.Badge style={{ cursor: 'pointer' }} onClick={handleClick}>
            <S.BadgeText>+</S.BadgeText>
          </S.Badge>
          <S.BadgeMorePopover
            id={id}
            open={open}
            anchorEl={popAnchor}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <S.BadgeMoreText>...</S.BadgeMoreText>
            {remainderTags.map(t => (
              <S.BadgeMoreText key={`rem-badge-${t}`}>{t}</S.BadgeMoreText>
            ))}
          </S.BadgeMorePopover>
        </>
      )}
    </S.Container>
  )
}

export default Badges
