import React from 'react'

import * as S from '@Style/ButtonEditStyles'

interface ButtonEdit {
  url: string
  tooltip: string
}

const ButtonEdit: React.FC<ButtonEdit> = ({ url, tooltip }) => {
  return (
    <S.Container>
      <S.StyTooltip title={tooltip}>
        <a href={url} target="_blank">
          <S.StyEditIcon />
        </a>
      </S.StyTooltip>
    </S.Container>
  )
}

export default ButtonEdit
