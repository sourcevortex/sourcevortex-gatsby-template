import styled from 'styled-components'

// Configs
import device from '@Config/devices.config'

export const Frame = styled.div`
  position: relative;
  padding: 10px;
  height: 100vh;
`

export const Container = styled.div`
  height: calc(100vh - 70px);
  position: relative;
  margin: 0 auto;
  border: 1px solid gray;
  border-radius: 0 0 5px 5px;
  overflow-y: scroll;
  box-shadow: 1px 1px 15px 1px #555;

  @media ${device.tablet} {
    padding: 1rem 10rem;
  }
`
