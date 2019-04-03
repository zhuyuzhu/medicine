export default {
  namespaced: true,
  state: {
    userName: ''
  },
  getters: {
    
  },
  mutations: {
    changeUserNum (state, {username}) {
      state.userName = username
    }
  },
  actions: {

  }
}