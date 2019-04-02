import Vue from 'vue'
import Router from 'vue-router'
//路由懒加载
const Home = () => import('./views/Home.vue')
const About = () => import('./views/About.vue')
const GroupBuy = () => import('./components/GroupBuy.vue')
const MenHealth = () => import('./components/MenHealth')
const LoseWeight = () => import('./components/LoseWeight')
const MedicalEquipment = () => import('./components/MedicalEquipment')
const HealthProtective = () => import('./components/HealthProtective')
const Error = () => import('./components/Error.vue')

const Message = () => import('./components/Message.vue')
const SignIn = () => import('./components/message/SignIn.vue')
const SignUp = () => import('./components/message/SignUp')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      
    },
    {
      path: '/about',
      name: 'about',
      component: About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
     // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/group-buy',
      name: 'groupBuy',
      component: GroupBuy
    },
    {
      path: '/men-health',
      name: 'menHealth',
      component: MenHealth
    },
    {
      path: '/lose-weight',
      name: 'loseWeight',
      component: LoseWeight
    },
    {
      path: '/medical-equipment',
      name: 'medicalEquipment',
      component: MedicalEquipment
    },
    {
      path: '/health-protective',
      name: 'healthProtective',
      component: HealthProtective
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      children: [
        {
          path: '/message/sign-in',
          name: 'signIn',
          component: SignIn
        },
        {
          path: '/message/sign-up',
          name: 'signUp',
          component: SignUp
        }
      ]
    },
    { //不存在的路径，跳转到该页面
      path: '/error.html',
      name: 'error',
      component: Error
    },
    {
      path: '*',//除了已经配置好路由
      redirect (to) {
        //console.log(to);
        if(to.path == '/'){ //如果你输入的路径是 / ,那么跳转到home首页面  
          return '/home'
        }else{  //否则跳转到error.html页面
          return 'error.html'
        }
      }
    }

  ]
})
