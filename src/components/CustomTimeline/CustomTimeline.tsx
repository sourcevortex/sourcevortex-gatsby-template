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

export interface Content {
  title: string
  subtitle: string
  subtitle2: string
  subtitle3: string
  showBody: boolean
  body: string
}

interface CustomTimelineProps {
  contents: Content[]
}

export default function CustomTimeline({ contents }: CustomTimelineProps) {
  const renderTimelineItem = (content: Content, index: number) => {
    const lastItem = contents.length === index + 1
    const { title, subtitle, subtitle2, subtitle3, showBody, body } = content
    return (
      <TimelineItem key={`timeline-item-${title}`}>
        <TimelineSeparator>
          <TimelineDot />
          {!lastItem && <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
          <StyledPaper>
            <StyledH6>{title}</StyledH6>
            <StyledSubtitle1>{subtitle}</StyledSubtitle1>
            <StyledSubtitle2>{subtitle2}</StyledSubtitle2>
            <StyledSubtitle2>{subtitle3}</StyledSubtitle2>
            {body && showBody && (
              <>
                <hr />
                <StyledBody1>{body}</StyledBody1>
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
        {contents && contents.map(renderTimelineItem)}
      </Timeline>
    </StyledContainer>
  )
}
