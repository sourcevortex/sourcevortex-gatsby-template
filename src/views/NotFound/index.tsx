import React from 'react'
import { Link } from 'gatsby'

// Components
import DefaultLayout from '@Layout/DefaultLayout'
import SEO from '@Component/Seo'
import Image from '@Component/Image'
import * as S from '@Style/NotFoundStyles'

const NotFoundPage: React.FC = () => {
  return (
    <DefaultLayout>
      <SEO title="Página não encontrada" />
      <h1>Página não encontrada</h1>
      <S.ImgContainer>
        <Image src="generic/hat.png" style={{ width: '300px' }} />
        <S.NotFoundText>Não me lembro desse lugar...</S.NotFoundText>
      </S.ImgContainer>
      <Link to="/">Voltar para página principal</Link>
    </DefaultLayout>
  )
}

export default NotFoundPage
