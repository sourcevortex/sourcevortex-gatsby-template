import React, { useState } from 'react'

// Main CSS
import '@Style/layout.css'
import '@Style/prism.css'

// Components
import Header from '@Component/Header'
import CustomDrawer from '@Component/CustomDrawer'
import SideMenuContent from '@Component/SideMenuContent'
import FloatEdit from '@Component/FloatEdit'
import * as S from './BlogLayoutStyles'

interface DefaultLayoutProps {
  children: React.ReactNode
  page?: string
}

const DefaultLayout: React.FC<DefaultLayoutProps> = props => {
  const { children, page } = props
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const handleToggleMenu = (open: boolean) => {
    setMenuIsOpen(open)
  }

  return (
    <>
      <Header openSideMenu={handleToggleMenu} />
      <CustomDrawer isOpen={menuIsOpen} handleToggle={handleToggleMenu}>
        <SideMenuContent />
      </CustomDrawer>
      <S.Container>
        <main>{children}</main>
        <FloatEdit page={page} />
      </S.Container>
    </>
  )
}
export default DefaultLayout
