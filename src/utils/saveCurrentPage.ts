import { Store } from 'redux'
import { Creators as AppActionCreator } from '@Duck/app'
import { AppStore } from '@Root/store'
import summary, { repository, PagesSummaryEnum } from '@Config/pagesSummary'

export default function saveCurrentPage(
  page: PagesSummaryEnum,
  store: Store<AppStore>
) {
  const link = `${repository}${summary[page]}`
  store.dispatch(AppActionCreator.changePage(link))
}
