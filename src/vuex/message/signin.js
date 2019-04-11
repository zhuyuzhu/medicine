export default {
  namespaced: true,
  state: {
    popupLogninBox: false,
    userName: '',
    tipShow: true,
    loggedOn: false,
    tip: false,//tip:false注册页面提示登录，true登录页面提示注册
  },
  getters: {
    
  },
  mutations: {
    changePopupLogninBox(state, value){ //登录框
      state.popupLogninBox = value;
    },
    changeUserNum (state, {username}) {
      state.userName = username;
      localStorage.setItem("username", username);//用户名缓存到本地
    },
    changeLoggedOff (state, {loggedOn}) {
      state.loggedOn = loggedOn;
      localStorage.setItem("loggedon", loggedOn); //登录状态缓存到本地
    },
    changeTipShow (state, {tipShow}){
      state.tipShow = tipShow
    },
    changeTip (state, {tip}) {
      state.tip = tip
    }
  },
  actions: {

  }
}