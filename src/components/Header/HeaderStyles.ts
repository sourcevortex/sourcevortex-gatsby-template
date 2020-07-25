import styled from 'styled-components'

// Components
import { Link } from 'gatsby'
import AppBar from '@material-ui/core/AppBar'

// Configs
import device from '@Config/devices'

export const Container = styled(AppBar)`
  display: flex;
  flex-direction: row !important;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #111111 !important;

  @media ${device.tablet} {
    display: none !important;
  }
`

export const StyLink = styled(Link)`
  margin: 0 20px;
  color: white;
`
