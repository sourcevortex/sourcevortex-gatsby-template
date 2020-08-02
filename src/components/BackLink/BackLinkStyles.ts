import styled from 'styled-components'

import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import Tooltip from '@material-ui/core/Tooltip'

export const Container = styled.div`
  width: 40px;
  height: 40px;
  background-color: #111;
  border-radius: 0.3em;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`

export const StyTooltip = styled(Tooltip)``

export const BackIcon = styled(KeyboardBackspaceIcon).attrs(() => ({
  htmlColor: 'white',
}))``
