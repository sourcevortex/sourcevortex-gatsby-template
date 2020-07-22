import React from 'react'
import { useSelector } from 'react-redux'

// Components
import Tooltip from '@material-ui/core/Tooltip'
import {
  StyledSidebarContainer,
  StyledSidebarSubContainer,
  StyledTopContainer,
  StyledBottomContainer,
  StyledLink,
  StyledAnchor,
  StyledHomeIcon,
  StyledBookIcon,
  StyledMenuBookIcon,
  StyledEditIcon,
} from './SidebarStyles'

import { AppStore } from '@Root/store'

const Sidebar: React.FC = () => {
  const currentPage = useSelector((state: AppStore) => state.app.page)

  return (
    <StyledSidebarContainer>
      <StyledSidebarSubContainer>
        <StyledTopContainer>
          <Tooltip title="Home">
            <StyledLink to="/">
              <StyledHomeIcon />
            </StyledLink>
          </Tooltip>
          <Tooltip title="Blog">
            <StyledLink to="/blog">
              <StyledBookIcon />
            </StyledLink>
          </Tooltip>
          <Tooltip title="Docs">
            <StyledLink to="/docs">
              <StyledMenuBookIcon />
            </StyledLink>
          </Tooltip>
        </StyledTopContainer>
        <StyledBottomContainer>
          <Tooltip title="Editar no github">
            <StyledAnchor href={currentPage} target="_blank">
              <StyledEditIcon />
            </StyledAnchor>
          </Tooltip>
        </StyledBottomContainer>
      </StyledSidebarSubContainer>
    </StyledSidebarContainer>
  )
}

export default Sidebar
