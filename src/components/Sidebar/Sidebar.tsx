import React from 'react'

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
      <StyledLink to="/">
        <StyledHomeIcon />
      </StyledLink>
      <StyledLink to="/Blog">
        <StyledBookIcon />
      </StyledLink>
      <StyledLink to="/Docs">
        <StyledMenuBookIcon />
      </StyledLink>
    </StyledSidebarContainer>
  )
}

export default Sidebar
