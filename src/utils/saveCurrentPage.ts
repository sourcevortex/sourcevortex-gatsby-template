import { Store } from 'redux'
import { AppStore } from '@Root/store'
import { Creators as AppActionCreator } from '@Duck/app'

export default function saveCurrentPage(link: string, store: Store<AppStore>) {
  store.dispatch(AppActionCreator.changePage(link))
}
