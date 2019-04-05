import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/resets.css';//重置样式
import '@/assets/iconfont.css';//引入icon图标

Vue.use(ElementUI);
Vue.config.productionTip = false

console.log(process.env.VUE_APP_URL);//打印当前所处的环境

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

