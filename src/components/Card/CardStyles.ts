import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

export const Container = styled(Paper)`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const PictureBox = styled.div`
  width: 100%;
  height: 120px;
  background-color: #ddd;
`

export const InfoContainer = styled.div`
  padding: 15px 10px;

  p {
    user-select: none;
  }
`

export const Title = styled(Typography)``

export const SubTitle = styled(Typography)``
