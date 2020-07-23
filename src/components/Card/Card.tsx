import React from 'react'

import {
  Container,
  PictureBox,
  InfoContainer,
  Title,
  SubTitle,
} from './CardStyles'

interface CardProps {
  title: string
  subtitle: string
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <Container>
      <PictureBox />
      <InfoContainer>
        <Title>{props.title}</Title>
        <SubTitle>{props.subtitle}</SubTitle>
      </InfoContainer>
    </Container>
  )
}

export default Card
