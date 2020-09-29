import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import { mapActions } from "vuex";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { title: "首页", needLogin: false, is_footer: true },
    component: Home,
  },
  //商品列表
  {
    path: "/GoodsList",
    name: "GoodsList",
    meta: { title: "商品", needLogin: true },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home/GoodsList.vue"),
  },
  //课程
  {
    path: "/CourseList",
    name: "CourseList",
    meta: { title: "课程", needLogin: true },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home/CourseList.vue"),
  },
  //课程详情
  {
    path: "/CourseDtail",
    name: "CourseDtail",
    meta: { title: "课程", needLogin: true },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home/CourseDtail.vue"),
  },
  //我的
  {
    path: "/MyCenter",
    name: "MyCenter",
    meta: { title: "我的", needLogin: true, is_footer: true },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyCenter/MyCenter.vue"),
  },

  //发现
  {
    path: "/Find",
    name: "Find",
    meta: { title: "发现", needLogin: false, is_footer: true },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Find/FindIndex.vue"),
  },
  //新闻
  {
    path: "/NewsList",
    name: "NewsList",
    meta: { title: "发现", needLogin: false },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Find/NewsList.vue"),
  },
  //订单
  {
    path: "/Order",
    name: "Order",
    meta: { title: "订单", needLogin: true, is_footer: true },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Order/OrderIndex.vue"),
  },
  //登录
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyCenter/Login.vue"),
  },
  //头部公共组件
  {
    path: "/Navigation",
    name: "Navigation",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Navigation.vue"),
  },
  //底部公共组件
  {
    path: "/Menu",
    name: "Menu",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Menu.vue"),
  },
  //商品 nav导航 组件
  {
    path: "/GoodsLeft",
    name: "GoodsLeft",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/GoodsLeft.vue"),
  },
  //商品右边 对应左边type的 content组件
  {
    path: "/GoodContent",
    name: "GoodContent",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/GoodContent.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((res) => {
      return res.meta.needLogin;
    })
  ) {
    //判断是否需要登陆验证
    let user = localStorage.getItem("user");
    let tokenTime = localStorage.getItem("overTime");

    if (!user && !tokenTime) {
      //判断是否有用户信息,且是第一次登陆
      next("/Login");
    } else {
      if (tokenTime && !user) {
        //判断一下是否过期
        alert("token过期了，请重新登录");
        next("/Login");
      } else {
        next();
      }
    }
  } else {
    next();
  }
});

export default router;
