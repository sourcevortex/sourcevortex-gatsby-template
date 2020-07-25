import React from 'react'

import * as S from './CardStyles'

interface CardProps {
  title: string
  subtitle: string
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <S.Container>
      <S.PictureBox />
      <S.InfoContainer>
        <S.Title>{props.title}</S.Title>
        <S.SubTitle>{props.subtitle}</S.SubTitle>
      </S.InfoContainer>
    </S.Container>
  )
}

export default Card
