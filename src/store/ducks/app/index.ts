import { Reducer } from 'redux'
import { createActions, createReducer } from 'reduxsauce'

import { AppAction, AppActionCreators, AppState, AppTypes } from './IApp'

export const { Types, Creators } = createActions<AppTypes, AppActionCreators>({
  changePage: ['page'],
})

const INITIAL_STATE: AppState = {
  page: '',
}

// Reducers
const changePage: Reducer<AppState, AppAction> = (
  state = INITIAL_STATE,
  action
) => ({
  ...state,
  page: action.page,
})

export default createReducer(INITIAL_STATE, {
  [Types.CHANGE_PAGE]: changePage,
})
