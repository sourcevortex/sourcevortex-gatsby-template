import React from 'react'
import { PageProps, graphql } from 'gatsby'
import Icon from '@material-ui/core/Icon'

// Components
import Tooltip from '@material-ui/core/Tooltip'

import {
  StyledSocialContainer,
  StyledSocialIconBox,
  StyledParagraph,
  StyledH3,
} from '@Component/Home/IndexStyles'
import { DefaultLayout } from '@Component/DefaultLayout'
import { SEO } from '@Component/Seo'
import { CustomTimeline } from '@Component/CustomTimeline'

// Others
import Profile from '@Root/config/profile'

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <DefaultLayout>
    <SEO title="Home/About page" />
    <h1>{Profile.name}</h1>
    <h2>{Profile.mailAddress}</h2>
    <StyledParagraph>{Profile.description}</StyledParagraph>
    <StyledSocialContainer>
      {Profile.socialNetworks.map(network => (
        <Tooltip title={network.name}>
          <StyledSocialIconBox>
            <a href={network.url} target="_blank">
              <Icon style={{ color: 'white' }} className={network.icon} />
            </a>
          </StyledSocialIconBox>
        </Tooltip>
      ))}
    </StyledSocialContainer>
    <StyledH3>Experiência</StyledH3>
    <CustomTimeline experiences={Profile.experience} />
  </DefaultLayout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
