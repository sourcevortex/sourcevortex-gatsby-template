import React from 'react'

import * as S from '@Style/CardStyles'

interface Badge {
  text: string
  color?: string
  background?: string
}

interface CardProps {
  title: string
  subtitle: string
  image?: string
  badge?: Badge
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const { title, subtitle, image, badge } = props
  return (
    <S.Container>
      <S.PictureBox src={image} />
      <S.InfoContainer>
        {badge.text && (
          <S.Badge background={badge.background}>
            <S.BadgeText txtcolor={badge.color}>{badge.text}</S.BadgeText>
          </S.Badge>
        )}
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subtitle}</S.SubTitle>
      </S.InfoContainer>
    </S.Container>
  )
}

export default Card
