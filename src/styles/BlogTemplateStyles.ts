import styled from 'styled-components'

import Image from '@Component/Image'
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

import devices from '@Config/devices.config'

export const Container = styled.div``

export const CoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media ${devices.tablet} {
    height: 450px;
    background-image: url('/images/generic/default.png');
    background-size: cover;
    background-repeat: none;
    background-attachment: fixed;
    box-shadow: 0px -5px 10px 0px #444 inset;
  }
`

export const CoverImage = styled(Image)`
  width: 100%;
  max-width: 670px;

  @media ${devices.tablet} {
    border-radius: 0.3em 0.3em 0 0;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 670px;
  height: 75px;

  @media ${devices.tablet} {
    flex-direction: row;
    background-color: #111111aa;
    border-radius: 0 0 0.3em 0.3em;
  }
`

export const Title = styled.h1`
  margin-top: 5px;
  font-size: 22px;
  text-align: center;

  @media ${devices.tablet} {
    margin: 0 0 0 15px;
    color: white;
    font-size: 28px;
  }
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

export const PostInfoContainer = styled.div`
  max-width: 960px;
  margin: 30px auto 30px auto;
  padding: 0 1rem;

  @media ${devices.tablet} {
    padding: 0 1rem;
  }
`

export const PostInfoSubContainer = styled.div`
  display: flex;
  align-items: center;
`

export const PostDateIcon = styled(QueryBuilderIcon).attrs(() => ({
  htmlColor: 'gray',
}))``

export const PostDate = styled.h2`
  font-size: 14px;
  margin: 0 0 0 10px;
  color: gray;

  @media ${devices.tablet} {
    font-size: 18px;
  }
`

export const PostContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1rem;
  p {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  @media ${devices.tablet} {
    padding: 0 1rem;
  }
`

export const FooterContainer = styled.div`
  margin: 0 auto;
  padding: 15px 1rem 0 1rem;
  border-top: 1px solid #aaa;

  a {
    text-decoration: none;
    color: #111;
  }

  @media ${devices.tablet} {
    padding: 25px 1rem 0 1rem;
  }
`

export const FooterButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FooterButtonsContainerLeft = styled.div``

export const FooterButtonsContainerRight = styled.div``
