import React, { useEffect } from 'react'
import { useStore } from 'react-redux'

// Main CSS
import './layout.css'
import './prism.css'

// Components
import { Sidebar } from '@Component/Sidebar'
import { StyledContainer } from './DefaultLayoutStyles'

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
      <Sidebar />
      <StyledContainer>
        <main>{children}</main>
      </StyledContainer>
    </>
  )
}
export default DefaultLayout
