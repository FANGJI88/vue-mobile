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
    meta:{ title: '首页', needLogin: true},
    component: Home
  },
  {
    path: '/MyCenter',
    name: 'MyCenter',
    meta: { title: '我的', needLogin: true},
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
  
  if(to.matched.some( res =>{ return res.meta.needLogin})){   //判断是否需要登陆验证
    let user = localStorage.getItem('user')

    if(!user){ //判断是否有用户信息
      next('/Login')

    }else{ 
      let tokenTime = localStorage.getItem('overTime')
      setTimeout(() => {  //判断一下是否过期，超过时间就清除缓存

        localStorage.removeItem('user')
        alert('token过期了，请重新登录')
        next('/Login')

      }, tokenTime);
    }
  }else{
    next()
  }
})


export default router
