import React from 'react'
import { useSelector } from 'react-redux'

// Components
import Tooltip from '@material-ui/core/Tooltip'
import * as S from './SidebarStyles'

import { AppStore } from '@Root/store'

const Sidebar: React.FC = () => {
  const currentPage = useSelector((state: AppStore) => state.app.page)

  return (
    <S.SidebarContainer>
      <S.SidebarSubContainer>
        <S.TopContainer>
          <Tooltip title="Home">
            <S.StyLink to="/">
              <S.StyHomeIcon />
            </S.StyLink>
          </Tooltip>
          <Tooltip title="Blog">
            <S.StyLink to="/blog">
              <S.StyBookIcon />
            </S.StyLink>
          </Tooltip>
          <Tooltip title="Docs">
            <S.StyLink to="/docs">
              <S.StyMenuBookIcon />
            </S.StyLink>
          </Tooltip>
        </S.TopContainer>
        <S.BottomContainer>
          <Tooltip title="Editar no github">
            <S.Anchor href={currentPage} target="_blank">
              <S.StyEditIcon />
            </S.Anchor>
          </Tooltip>
        </S.BottomContainer>
      </S.SidebarSubContainer>
    </S.SidebarContainer>
  )
}

export default Sidebar
