import styled from 'styled-components'
import { Link } from 'gatsby'

// Icons
import HomeIcon from '@material-ui/icons/Home'
import BookIcon from '@material-ui/icons/Book'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import EditIcon from '@material-ui/icons/Edit'

// Configs
import device from '@Config/devices'

export const SidebarContainer = styled.div`
  display: none;
  align-items: center;
  position: fixed;
  width: 60px;
  height: 100vh;

  @media ${device.tablet} {
    display: flex;
  }
`

export const SidebarSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #111111;
  border-radius: 0.3rem;
  width: 40px;
  height: 300px;
  margin-left: 10px;
`

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 10px 0;
`

export const Anchor = styled.a`
  color: white;
  text-decoration: none;
`

export const StyHomeIcon = styled(HomeIcon)``

export const StyBookIcon = styled(BookIcon)``

export const StyMenuBookIcon = styled(MenuBookIcon)``

export const StyEditIcon = styled(EditIcon)``
