import React from 'react'
import { Provider } from 'react-redux'

import createStore from './src/store'

export default ({ element }: { element: React.ReactNode }): JSX.Element => {
  const store = createStore()
  return <Provider store={store}>{element}</Provider>
}
