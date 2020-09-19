import React, { useState } from 'react'

// Main CSS
import GlobalStyles from '@Style/_GlobalStyles'
import PrismStyles from '@Style/PrismStyles'

// Components
import Header from '@Component/Header'
import CustomDrawer from '@Component/CustomDrawer'
import SideMenuContent from '@Component/SideMenuContent'
import * as S from '@Style/BlogLayoutStyles'

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
      <S.Frame>
        <GlobalStyles />
        <PrismStyles />
        <Header openSideMenu={handleToggleMenu} />
        <CustomDrawer isOpen={menuIsOpen} handleToggle={handleToggleMenu}>
          <SideMenuContent />
        </CustomDrawer>
        <S.Container>
          <main>{children}</main>
        </S.Container>
      </S.Frame>
    </>
  )
}
export default DefaultLayout
