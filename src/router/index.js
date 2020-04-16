import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import { mapActions } from 'vuex'
// import MyCenter from '../views/MyCenter/MyCenter.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/MyCenter',
    name: 'MyCenter',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyCenter/MyCenter.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyCenter/Login.vue')
  },
]

// router.beforeEach((to, from,next)=>{
//   if(to == '/'){
//     alert('您还没有登录，请先登录')
//     next('/Login')
//   }else{
//     next()
//   }
// })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
