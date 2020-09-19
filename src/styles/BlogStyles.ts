import styled from 'styled-components'
import { Link } from 'gatsby'

import Typography from '@material-ui/core/Typography'

import device from '@Config/devices.config'

export const Title = styled.h1`
  text-align: center;
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding: 0 10%;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    padding: 0;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const StyLink = styled(Link)`
  text-decoration: none;
  color: #111111;
`

export const NotFoundText = styled(Typography)``
