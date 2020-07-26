import styled from 'styled-components'

// Configs
import device from '@Config/devices'

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 960px;
  padding: 4rem 1.45rem;

  @media ${device.tablet} {
    padding: 4rem 4rem;
  }
`
