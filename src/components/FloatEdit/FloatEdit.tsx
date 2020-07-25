import React from 'react'

// Components
import EditIcon from '@material-ui/icons/Edit'
import * as S from './FloatEditStyles'

const FloatEdit: React.FC<{ page: string }> = ({ page }) => {
  return (
    <S.Container>
      <S.StyLink href={page} target="_blank">
        <S.StyFab size="medium" aria-label="edit">
          <EditIcon />
        </S.StyFab>
      </S.StyLink>
    </S.Container>
  )
}

export default FloatEdit
