import React from 'react'

import { SidebarContainer, TmpLink } from './SidebarStyles'

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <TmpLink to="/">About</TmpLink>
      <TmpLink to="/Blog">Blog</TmpLink>
      <TmpLink to="/Docs">Docs</TmpLink>
    </SidebarContainer>
  )
}

export default Sidebar
