import React from 'react'

// Main CSS
import './layout.css'
import './prism.css'

// Components
import Header from '@Component/Header'
import Sidebar from '@Component/Sidebar'
import FloatEdit from '@Component/FloatEdit'
import * as S from './DefaultLayoutStyles'

interface DefaultLayoutProps {
  children: React.ReactNode
  page?: string
}

const DefaultLayout: React.FC<DefaultLayoutProps> = props => {
  const { children, page } = props

  return (
    <>
      <Header />
      <Sidebar page={page} />
      <S.Container>
        <main>{children}</main>
        <FloatEdit page={page} />
      </S.Container>
    </>
  )
}
export default DefaultLayout
