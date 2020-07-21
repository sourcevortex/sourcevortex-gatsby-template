import React from 'react'

import Tooltip from '@material-ui/core/Tooltip'

import {
  StyledSidebarContainer,
  StyledSidebarSubContainer,
  StyledLink,
  StyledHomeIcon,
  StyledBookIcon,
  StyledMenuBookIcon,
} from './SidebarStyles'

const Sidebar: React.FC = () => {
  return (
    <StyledSidebarContainer>
      <StyledSidebarSubContainer>
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
      </StyledSidebarSubContainer>
    </StyledSidebarContainer>
  )
}

export default Sidebar
