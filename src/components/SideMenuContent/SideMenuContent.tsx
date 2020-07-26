import React from 'react'

// Components
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import * as S from './SideMenuContentStyles'

const SideMenuContent: React.FC = () => {
  return (
    <S.Container>
      <List>
        <S.StyLink to="/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Sobre" />
          </ListItem>
        </S.StyLink>
        <S.StyLink to="/blog">
          <ListItem button>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="Blog" />
          </ListItem>
        </S.StyLink>
      </List>
    </S.Container>
  )
}

export default SideMenuContent
