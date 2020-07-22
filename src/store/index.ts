import { createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './ducks'
import { AppState } from './ducks/app/IApp'

export interface AppStore {
  app: AppState
}

export default (): Store<AppStore> =>
  createStore(reducer, composeWithDevTools())
