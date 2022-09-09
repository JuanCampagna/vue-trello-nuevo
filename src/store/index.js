import { createStore, createLogger } from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const debug = process.env.NODE_ENV !== 'production'

export const store = createStore({
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  getters,
  actions,
  mutations,
  state,
  // state () {
  //   return {
  //     count: 0
  //   }
  // }
})
