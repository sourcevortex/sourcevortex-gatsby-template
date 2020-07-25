import React from 'react'

import * as S from './CardStyles'

interface CardProps {
  title: string
  subtitle: string
  image?: string
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const { title, subtitle, image } = props
  return (
    <S.Container>
      <S.PictureBox src={image} />
      <S.InfoContainer>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subtitle}</S.SubTitle>
      </S.InfoContainer>
    </S.Container>
  )
}

export default Card
