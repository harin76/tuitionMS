import Vue from 'vue'
import Vuex from 'vuex'

import measures from './modules/measures'

import state from './state'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    measures
  },
  state,
  actions,
  mutations,
  getters,
  strict: debug
})
