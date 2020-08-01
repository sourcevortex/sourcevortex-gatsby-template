import React from 'react'

// Components
import Icon from '@material-ui/core/Icon'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import * as S from './SideMenuContentStyles'

// Configs
import themeConfig from '@Config/template.config'

const SideMenuContent: React.FC = () => {
  const {
    headerAndSidebar: { links },
  } = themeConfig

  return (
    <S.Container>
      <List>
        {links.map(link => (
          <S.StyLink to={link.href}>
            <ListItem button>
              <ListItemIcon>
                <S.StyIcon className={link.icon} />
              </ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItem>
          </S.StyLink>
        ))}
      </List>
    </S.Container>
  )
}

export default SideMenuContent
