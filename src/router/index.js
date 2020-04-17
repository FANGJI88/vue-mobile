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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from,next)=>{
  let user = localStorage.getItem('user')
  if( !user && to.path == '/'){
    next('/Login')
  }else{
    next()
  }
})


export default router
