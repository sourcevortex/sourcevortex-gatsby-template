import React from 'react'

import Tooltip from '@material-ui/core/Tooltip'

import {
  StyledSidebarContainer,
  StyledLink,
  StyledHomeIcon,
  StyledBookIcon,
  StyledMenuBookIcon,
} from './SidebarStyles'

const Sidebar: React.FC = () => {
  return (
    <StyledSidebarContainer>
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
    </StyledSidebarContainer>
  )
}

export default Sidebar
