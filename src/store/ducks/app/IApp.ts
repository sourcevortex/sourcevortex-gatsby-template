import { AnyAction } from 'redux'

export interface AppTypes {
  CHANGE_PAGE: string
}

export interface AppState {
  page: string
}

export interface AppActionCreators {
  changePage: (page: string) => AnyAction
}

export interface AppAction extends AppState {
  type: string
}
