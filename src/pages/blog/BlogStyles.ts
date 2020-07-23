import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #111111;
`
