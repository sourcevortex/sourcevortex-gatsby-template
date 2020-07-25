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
`

export const PictureBox = styled(Image)`
  width: 100%;
  height: 120px;
  background-color: #ddd;
  border-radius: 0.3em 0.3em 0 0;
`

export const InfoContainer = styled.div`
  padding: 15px 10px;

  p {
    user-select: none;
  }
`

export const Title = styled(Typography)``

export const SubTitle = styled(Typography)``
