import styled from 'styled-components'

// Components
import { Link } from 'gatsby'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'

// Configs
import device from '@Config/devices.config'

export const Container = styled(AppBar).attrs(() => ({
  position: 'relative',
}))`
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #111111 !important;
  border-radius: 5px 5px 0 0;
  box-shadow: 1px 1px 15px 1px #555 !important;
`

export const TextLink = styled(Link)`
  color: white;
  text-decoration: none;
`

export const LeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;

  .sv-left-logo {
    display: none;
  }

  @media ${device.laptop} {
    .sv-left-logo {
      display: block;
    }
  }
`

export const CenterContainer = styled.div`
  @media ${device.laptop} {
    display: none;
  }
`

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 15px;
`

// INI - Left Container
export const StyMenuIcon = styled(MenuIcon)`
  @media ${device.laptop} {
    display: none !important;
  }
`
// END - Left Container

// INI - Center Container
export const BlogLogo = styled(Typography)`
  font-size: 28px !important;
  font-weight: bold !important;
  user-select: none;
`
// END - Center Container

// INI - Right Container
export const HeaderMenuItemText = styled(Typography)`
  display: none;
  font-weight: bold !important;
  user-select: none;

  @media ${device.laptop} {
    display: block;
  }
`

export const StySearchIcon = styled(SearchIcon)`
  /* Search not implemented yet */
  display: none !important;

  @media ${device.laptop} {
    margin-left: 30px;
  }
`
// END - Right Container
