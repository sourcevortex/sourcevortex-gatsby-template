import styled from 'styled-components'
import Image from '@Component/Image'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

export const Container = styled.div``

export const CoverImage = styled(Image)`
  width: 100%;
  border-radius: 0.3em;
  margin-bottom: 30px;
`

export const Title = styled.h1`
  margin-bottom: 10px;
  text-align: center;
`

export const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.45rem;
`

export const Badge = styled.div<{ background?: string }>`
  padding: 5px;
  height: 27px;
  margin: 0 10px;
  border-radius: 0.3em;
  background-color: ${props => props.background || '#111'};
  border-radius: 0.3em;
  padding: 3px 10px;
  box-shadow: 1px 1px 5px 1px #888;
`

export const BadgeText = styled(Typography)<{ txtColor?: string }>`
  text-align: center;
  font-size: 18px !important;
  line-height: 22px !important;
  user-select: none;
  color: ${props => props.txtColor || 'white'};
`

export const BadgeMoreTooltip = styled(Tooltip)``

export const MoreTooltipContent = styled(Typography)``

export const PostDate = styled.h2`
  padding-bottom: 10px;
  font-size: 18px;
  text-align: center;
  border-bottom: 1px solid #111111;
`

export const PostContainer = styled.div`
  p {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`
