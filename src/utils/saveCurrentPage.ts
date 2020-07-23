import { Store } from 'redux'
import { Creators as AppActionCreator } from '@Duck/app'
import { AppStore } from '@Root/store'

/**
 * Save current page path in redux for usage in every place on this project
 * @param page Page path to store
 * @param store Store instance
 */
export default function saveCurrentPage(
  page: string,
  store: Store<AppStore>
): void {
  store.dispatch(AppActionCreator.changePage(page))
}
