import React from 'react'

import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'

import {
  StyledContainer,
  StyledPaper,
  StyledH6,
  StyledSubtitle1,
  StyledSubtitle2,
  StyledBody1,
} from './CustomTimelineStyles'

interface Experience {
  position: string
  company: string
  start: string
  end: string
  localization: string
  showDescription: boolean
  description: string
}

interface CustomTimelineProps {
  experiences: Experience[]
}

export default function CustomTimeline({ experiences }: CustomTimelineProps) {
  const renderTimelineItem = (experience: Experience, index: number) => {
    const lastItem = experiences.length === index + 1
    const {
      position,
      company,
      start,
      end,
      localization,
      showDescription,
      description,
    } = experience
    return (
      <TimelineItem key={`timeline-item-${position}`}>
        <TimelineSeparator>
          <TimelineDot />
          {!lastItem && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
          <StyledPaper>
            <StyledH6>{position}</StyledH6>
            <StyledSubtitle1>{company}</StyledSubtitle1>
            <StyledSubtitle2>{`${start} - ${end}`}</StyledSubtitle2>
            <StyledSubtitle2>{localization}</StyledSubtitle2>
            {description && showDescription && (
              <>
                <hr />
                <StyledBody1>{description}</StyledBody1>
              </>
            )}
          </StyledPaper>
        </TimelineContent>
      </TimelineItem>
    )
  }

  return (
    <StyledContainer>
      <Timeline align="left">
        {experiences && experiences.map(renderTimelineItem)}
      </Timeline>
    </StyledContainer>
  )
}
