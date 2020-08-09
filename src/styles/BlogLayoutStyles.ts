import styled from 'styled-components'

// Configs
import device from '@Config/devices.config'

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 50px 0 18px 0;
  max-width: 960px;

  @media ${device.tablet} {
    max-width: 100%;
  }
`
