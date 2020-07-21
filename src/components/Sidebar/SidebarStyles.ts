import styled from 'styled-components'
import { Link } from 'gatsby'
import HomeIcon from '@material-ui/icons/Home'
import BookIcon from '@material-ui/icons/Book'
import MenuBookIcon from '@material-ui/icons/MenuBook'

export const StyledSidebarContainer = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  width: 60px;
  height: 100vh;
`

export const StyledSidebarSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111111;
  border-radius: 0.3rem;
  width: 40px;
  height: 300px;
  margin-left: 10px;
`

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 10px 0;
`

export const StyledHomeIcon = styled(HomeIcon)``

export const StyledBookIcon = styled(BookIcon)``

export const StyledMenuBookIcon = styled(MenuBookIcon)``
