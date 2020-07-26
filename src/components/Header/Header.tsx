import React from 'react'

// Components
import * as S from './HeaderStyles'

interface HeaderProps {
  openSideMenu: (open: boolean) => void
}

const Header: React.FC<HeaderProps> = props => {
  const { openSideMenu } = props

  return (
    <S.Container>
      <S.LeftContainer>
        <S.StyMenuIcon onClick={() => openSideMenu(true)} />
        <S.TextLink to="/" className="sv-left-logo">
          <S.BlogLogo>SourceVortex</S.BlogLogo>
        </S.TextLink>
      </S.LeftContainer>
      <S.CenterContainer>
        <S.TextLink to="/">
          <S.BlogLogo>SourceVortex</S.BlogLogo>
        </S.TextLink>
      </S.CenterContainer>
      <S.RightContainer>
        <S.TextLink to="/blog">
          <S.HeaderMenuItemText>Blog</S.HeaderMenuItemText>
        </S.TextLink>
        <S.StySearchIcon />
      </S.RightContainer>
    </S.Container>
  )
}

export default Header
