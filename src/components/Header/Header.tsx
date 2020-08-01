import React from 'react'

// Components
import * as S from './HeaderStyles'

// Configs
import themeConfig from '@Config/template.config'

interface HeaderProps {
  openSideMenu: (open: boolean) => void
}

const Header: React.FC<HeaderProps> = props => {
  const { openSideMenu } = props
  const {
    headerAndSidebar: { displayName, links },
  } = themeConfig

  return (
    <S.Container>
      <S.LeftContainer>
        <S.StyMenuIcon onClick={() => openSideMenu(true)} />
        <S.TextLink to="/" className="sv-left-logo">
          <S.BlogLogo>{displayName}</S.BlogLogo>
        </S.TextLink>
      </S.LeftContainer>
      <S.CenterContainer>
        <S.TextLink to="/">
          <S.BlogLogo>{displayName}</S.BlogLogo>
        </S.TextLink>
      </S.CenterContainer>
      <S.RightContainer>
        {links.map(link => {
          ;<S.TextLink to={link.href}>
            <S.HeaderMenuItemText>{link.name}</S.HeaderMenuItemText>
          </S.TextLink>
        })}
        <S.StySearchIcon />
      </S.RightContainer>
    </S.Container>
  )
}

export default Header
