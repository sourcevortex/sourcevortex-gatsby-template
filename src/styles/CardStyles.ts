import styled from 'styled-components'

// Components
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Image from '@Component/Image'

export const Container = styled(Paper).attrs(() => ({
  elevation: 3,
}))`
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    box-shadow: 1px 1px 5px 3px #bbb;
  }
`

export const PictureBox = styled(Image)`
  width: 100%;
  height: 160px;
  background-color: #ddd;
  border-bottom: 1px solid black;
  border-radius: 0.3em 0.3em 0 0;
`

export const Badge = styled.div<{ background: string }>`
  position: absolute;
  top: -15px;
  min-width: 50px;
  height: 27px;
  background-color: ${props => props.background || '#111'};
  border-radius: 0.3em;
  padding: 3px;
  box-shadow: 1px 1px 5px 0px #000;
`

export const BadgeText = styled(Typography)<{ txtcolor: string }>`
  font-size: 16px !important;
  color: ${props => props.txtcolor || 'white'};
`

export const InfoContainer = styled.div`
  position: relative;
  padding: 25px 10px 15px 10px;

  p {
    user-select: none;
  }
`

export const Title = styled(Typography)``

export const SubTitle = styled(Typography)``
