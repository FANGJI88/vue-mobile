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
  props: {
    // current: Number,
  },
  watch: {
    $route(to) {
      this.nav.forEach((el) => {
        console.log(to.path);
        // console.log(el.router);
        // console.log(el.router === to.path);
        if (to.path === el.router) {
          this.is_footer = true;
        } else {
          this.is_footer = false;
        }
        // this.is_footer = to.path === el.router;
      });
      console.log(to);
    },
  },
};
</script>
<style scoped lang="scss">
.menu {
  width: 10rem;
  height: 1.333333rem;
  bottom: 0;
  flex: 1;
  z-index: 100;
  color: #9c9c9c;
  font-size: 0.32rem;
  justify-content: space-around;
  border-top: 1px solid #f8f8f8;
  box-shadow: 0.133333rem 0 0.066667rem #f5f5f5;
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
