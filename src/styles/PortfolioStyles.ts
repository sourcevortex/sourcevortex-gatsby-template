import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

export const SocialContainer = styled.div`
  display: flex;
  margin: 30px 0;
`

export const SocialIconBox = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-color: #111111;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #333333;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }

  span {
    text-align: center;
  }
`
export const Paragraph = styled(Typography)``

export const H3 = styled(Typography).attrs(() => ({
  component: 'h3',
}))`
  font-size: 2rem !important;
  font-weight: bold !important;
`
