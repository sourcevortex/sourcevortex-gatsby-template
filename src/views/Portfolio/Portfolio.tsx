import React from 'react'

// Components
import Icon from '@material-ui/core/Icon'
import Tooltip from '@material-ui/core/Tooltip'
import DefaultLayout from '@Layout/DefaultLayout'
import SEO from '@Component/Seo'
import CustomTimeline, { Content } from '@Component/CustomTimeline'
import * as S from './PortfolioStyles'

// Configs
import Profile from '@Config/profile.config'

const Portfolio: React.FC = () => {
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
    <DefaultLayout>
      <SEO title="Sobre" />
      <h1>{Profile.name}</h1>
      <h2>{Profile.mailAddress}</h2>
      <S.Paragraph>{Profile.description}</S.Paragraph>
      <S.SocialContainer>
        {Profile.socialNetworks.map(network => (
          <Tooltip key={`tooltip-${network.name}`} title={network.name}>
            <S.SocialIconBox>
              <a href={network.url} target="_blank">
                <Icon style={{ color: 'white' }} className={network.icon} />
              </a>
            </S.SocialIconBox>
          </Tooltip>
        ))}
      </S.SocialContainer>
      <S.H3>Experiência</S.H3>
      <CustomTimeline contents={timelineContents} />
    </DefaultLayout>
  )
}

export default Portfolio
