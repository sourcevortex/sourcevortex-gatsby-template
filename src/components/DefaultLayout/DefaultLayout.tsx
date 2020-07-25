import React, { useEffect } from 'react'
import { useStore } from 'react-redux'

// Main CSS
import './layout.css'
import './prism.css'

// Components
import Header from '@Component/Header'
import Sidebar from '@Component/Sidebar'
import FloatEdit from '@Component/FloatEdit'
import * as S from './DefaultLayoutStyles'

// Utils & Others
import saveCurrentPage from '@Util/saveCurrentPage'
import { AppStore } from '@Root/store'

interface DefaultLayoutProps {
  children: React.ReactNode
  page?: string
}

const DefaultLayout: React.FC<DefaultLayoutProps> = (
  props: DefaultLayoutProps
) => {
  const { children, page } = props

  const store = useStore<AppStore>()

  useEffect(() => {
    if (page) {
      saveCurrentPage(page, store)
    }
  }, [page])

  return (
    <>
      <Header />
      <Sidebar />
      <S.Container>
        <main>{children}</main>
        <FloatEdit />
      </S.Container>
    </>
  )
}
export default DefaultLayout
