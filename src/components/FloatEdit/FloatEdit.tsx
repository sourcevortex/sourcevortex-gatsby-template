import React from 'react'

// Components
import EditIcon from '@material-ui/icons/Edit'
import * as S from './FloatEditStyles'

const FloatEdit: React.FC = () => {
  return (
    <S.Container>
      <S.StyFab size="medium" aria-label="edit">
        <EditIcon />
      </S.StyFab>
    </S.Container>
  )
}

export default FloatEdit
