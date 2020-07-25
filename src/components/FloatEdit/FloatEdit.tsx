import React from 'react'
import { useSelector } from 'react-redux'

// Components
import EditIcon from '@material-ui/icons/Edit'
import * as S from './FloatEditStyles'

import { AppStore } from '@Root/store'

const FloatEdit: React.FC = () => {
  const currentPage = useSelector((state: AppStore) => state.app.page)

  return (
    <S.Container>
      <S.StyLink href={currentPage} target="_blank">
        <S.StyFab size="medium" aria-label="edit">
          <EditIcon />
        </S.StyFab>
      </S.StyLink>
    </S.Container>
  )
}

export default FloatEdit
