import styled from 'styled-components'

import { Link } from 'gatsby'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;

  ul.MuiList-root.MuiList-padding {
    width: 100%;
  }
`

export const StyLink = styled(Link)`
  text-decoration: none;
  color: #676767;
`
