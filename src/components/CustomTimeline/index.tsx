import React from 'react'

// Components
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import * as S from '@Style/CustomTimelineStyles'

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
          <S.StyPaper>
            <S.H6>{title}</S.H6>
            <S.Subtitle1>{subtitle}</S.Subtitle1>
            <S.Subtitle2>{subtitle2}</S.Subtitle2>
            <S.Subtitle2>{subtitle3}</S.Subtitle2>
            {body && showBody && (
              <>
                <hr />
                <S.Body1>{body}</S.Body1>
              </>
            )}
          </S.StyPaper>
        </TimelineContent>
      </TimelineItem>
    )
  }

  return (
    <S.Container>
      <Timeline align="left">
        {contents && contents.map(renderTimelineItem)}
      </Timeline>
    </S.Container>
  )
}
