import styled from 'styled-components'

// Components
import Fab from '@material-ui/core/Fab'

export const Container = styled.div`
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 2;
`

export const StyLink = styled.a`
  color: white;
  text-decoration: none;
`

export const StyFab = styled(Fab)`
  background-color: #111111 !important;

  .MuiFab-label {
    color: white;
  }
`
