import Vue from 'vue'
import Vuex from 'vuex'

import lognin from '../src/vuex/message/signin'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, // 严格模式
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    lognin,
  }
})
