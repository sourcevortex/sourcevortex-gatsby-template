import styled from 'styled-components'

// Components
import Fab from '@material-ui/core/Fab'

// Configs
import device from '@Config/devices'

export const Container = styled.div`
  position: fixed;
  right: 15px;
  bottom: 15px;

  @media ${device.tablet} {
    display: none;
  }
`

export const StyFab = styled(Fab)`
  background-color: #111111 !important;

  .MuiFab-label {
    color: white;
  }
`
