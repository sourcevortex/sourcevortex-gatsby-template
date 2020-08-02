import React from 'react'
import { Link } from 'gatsby'

import * as S from './BackLinkStyles'

interface BackLink {
  url: string
  tooltip: string
}

const BackLink: React.FC<BackLink> = ({ url, tooltip }) => {
  return (
    <S.Container>
      <S.StyTooltip title={tooltip}>
        <Link to={url}>
          <S.BackIcon />
        </Link>
      </S.StyTooltip>
    </S.Container>
  )
}

export default BackLink
