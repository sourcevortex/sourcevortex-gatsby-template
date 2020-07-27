import styled from 'styled-components'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

export const Container = styled.div`
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
