import React, { useState } from 'react'

// Main CSS
import './layout.css'
import './prism.css'

// Components
import Header from '@Component/Header'
import CustomDrawer from '@Component/CustomDrawer'
import SideMenuContent from '@Component/SideMenuContent'
// import Sidebar from '@Component/Sidebar'
import FloatEdit from '@Component/FloatEdit'
import * as S from './DefaultLayoutStyles'

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
      {/* <Sidebar page={page} /> */}
      <S.Container>
        <main>{children}</main>
        <FloatEdit page={page} />
      </S.Container>
    </>
  )
}
export default DefaultLayout
