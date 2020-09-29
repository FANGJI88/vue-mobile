<template>
  <div class="menu pof flex" v-show="is_footer">
    <div
      class="wrap flex"
      v-for="(item, index) in nav"
      :key="index"
      @click="$router.push(item.router)"
    >
      <img :src="$route.path === item.router ? item.delect : item.defaule" />
      <span :class="{ active: $route.path === item.router }">{{
        item.navTitle
      }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 是否展示底部导航
      is_footer: true,

      // 导航菜单
      nav: [
        {
          defaule: "/static/image/home/home_index_1.png",
          delect: "/static/image/home/home_index_2.png",
          navTitle: "首页",
          router: "/",
        },
        {
          defaule: "/static/image/home/home_fx_1.png",
          delect: "/static/image/home/home_fx_2.png",
          navTitle: "直播",
          router: "/Find",
        },
        {
          defaule: "/static/image/home/home_dd_1.png",
          delect: "/static/image/home/home_dd_2.png",
          navTitle: "订单",
          router: "/Order",
        },
        {
          defaule: "/static/image/home/home_wd_1.png",
          delect: "/static/image/home/home_wd_2.png",
          navTitle: "我的",
          router: "/MyCenter",
        },
      ],
    };
  },
  methods: {
    selecNav(index, item) {
      this.$router.push(item.router);
    },
  },
  computed: {},

  watch: {
    $route(to) {
      // 第一种写法:
      // 监听路由，循环导航菜单
      // 匹配当前路由 是否包含在 循环的列表项中
      // 用一个变量来承载这个结果，控制底部导航显示与否

      for (let i = 0; i < this.nav.length; i++) {
        const list = this.nav[i];
        if (to.path === list.router) {
          this.is_footer = true;
          break;
        }
        // 此处循环要比较完所有的item项才会进入
        else if (i === this.nav.length - 1) {
          this.is_footer = false;
        }
      }

      // 第二种写法
      // 在需要显示底部导航的路由 meta中定义一个参数
      // APP里面直接监听路由，判断meta中是否有这个值
      // APP中的Menu组件中定义一个变量，接收meta返回的结果控制显示与否
      // 具体返回看APP写法.....

      // 第三中写法:
      // 项目最原始的写法,定义一个current传参,不再全局APP使用
      // 哪里需要就在哪里引入使用, 传入0,1,2,3 控制当前页的路由
      // 以上两种是第一中的延申,具体第三种可以查看提交记录....
    },
  },
};
</script>
<style scoped lang="scss">
.menu {
  width: 10rem;
  height: 98px;
  bottom: 0;
  flex: 1;
  z-index: 100;
  color: #9c9c9c;
  font-size: 0.32rem;
  justify-content: space-around;
  border-top: 1px solid #f8f8f8;
  box-shadow: 0.133333rem 0 0.066667rem #f5f5f5;
  background-color: #fff;
  .wrap {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 0.666667rem;
      height: 0.666667rem;
      margin-bottom: 0.04rem;
    }
    .active {
      color: #42b983;
      font-weight: bold;
    }
  }
}
</style>
