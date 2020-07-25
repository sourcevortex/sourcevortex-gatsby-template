import React from 'react'

// Components
import HomeIcon from '@material-ui/icons/Home'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import * as S from './HeaderStyles'

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.StyLink to="/">
        <HomeIcon />
      </S.StyLink>
      <S.StyLink to="/blog">
        <MenuBookIcon />
      </S.StyLink>
    </S.Container>
  )
}

export default Header
