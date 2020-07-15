import styled from 'styled-components'
import { Link } from 'gatsby'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 70px;
  height: 100vh;
  background-color: #111111;
`

/**
 * TODO: Replace with icons (Material UI)
 */
export const TmpLink = styled(Link)`
  display: block;
  color: white;
  text-decoration: none;
`
