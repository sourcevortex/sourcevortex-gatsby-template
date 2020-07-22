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
import { PagesSummaryEnum as Pg } from '@Root/config/pagesSummary'

type DataProps = {
  site: {
    buildTime: string
  }
}

const HomePage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  return (
    <DefaultLayout page={Pg.HOME_PAGE}>
      <SEO title="Home/About page" />
      <h1>{Profile.name}</h1>
      <h2>{Profile.mailAddress}</h2>
      <StyledParagraph>{Profile.description}</StyledParagraph>
      <StyledSocialContainer>
        {Profile.socialNetworks.map(network => (
          <Tooltip key={`tooltip-${network.name}`} title={network.name}>
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
}

export default HomePage

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
