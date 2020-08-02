import React, { useState } from 'react'

// Main CSS
import '@Style/layout.css'

// Components
import Header from '@Component/Header'
import CustomDrawer from '@Component/CustomDrawer'
import SideMenuContent from '@Component/SideMenuContent'
import * as S from './DefaultLayoutStyles'

interface DefaultLayoutProps {
  children: React.ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = props => {
  const { children } = props
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
      </S.Container>
    </>
  )
}
export default DefaultLayout
