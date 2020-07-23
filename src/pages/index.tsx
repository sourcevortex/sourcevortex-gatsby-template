import React from 'react'
import { PageProps, graphql } from 'gatsby'
import Icon from '@material-ui/core/Icon'

// Components
import Tooltip from '@material-ui/core/Tooltip'
import { DefaultLayout } from '@Component/DefaultLayout'
import { SEO } from '@Component/Seo'
import { CustomTimeline, Content } from '@Component/CustomTimeline'

// Styles
import {
  StyledSocialContainer,
  StyledSocialIconBox,
  StyledParagraph,
  StyledH3,
} from '@PageStyle/IndexStyles'

// Configs
import Profile from '@Config/profile'
import { getPage, PagesSummaryEnum as Pg } from '@Config/pagesSummary'

type DataProps = {
  site: {
    buildTime: string
  }
}

const HomePage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  let timelineContents: Content[] = []

  Profile.experience.map(exp => {
    timelineContents.push({
      title: exp.position,
      subtitle: exp.company,
      subtitle2: `${exp.start} - ${exp.end}`,
      subtitle3: `${exp.localization}`,
      body: exp.description,
      showBody: exp.showDescription,
    })
  })

  return (
    <DefaultLayout page={getPage(Pg.HOME_PAGE)}>
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
      <CustomTimeline contents={timelineContents} />
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
