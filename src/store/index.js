import { createStore, createLogger } from 'vuex'

const debug = process.env.NODE_ENV !== 'production'

export const store = createStore({
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  getters: {},
  actions: {},
  mutations: {},
  state: {},
  // state () {
  //   return {
  //     count: 0
  //   }
  // }
})