import styled from 'styled-components'
import { Link } from 'gatsby'
import HomeIcon from '@material-ui/icons/Home'
import BookIcon from '@material-ui/icons/Book'
import MenuBookIcon from '@material-ui/icons/MenuBook'

export const StyledSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 60px;
  height: 100vh;
  background-color: #111111;
`

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

export const StyledHomeIcon = styled(HomeIcon)``

export const StyledBookIcon = styled(BookIcon)``

export const StyledMenuBookIcon = styled(MenuBookIcon)``
