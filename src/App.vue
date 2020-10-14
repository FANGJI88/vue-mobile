<template>
  <div id="app">
    <div class="app-content" :class="{ 'app-content-footer': isMenu }">
      <transition name="van-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <!-- 底部导航 -->
    <transition name="van-fade" mode="out-in">
      <Menu v-show="isMenu"></Menu>
    </transition>
  </div>
</template>
<script>
import Menu from "../src/components/Menu";

export default {
  data() {
    return {
      isMenu: true,
    };
  },
  components: {
    Menu,
  },
  methods: {
    mounted() {},
  },

  // 显示底部导航的第二种写法
  watch: {
    $route(to) {
      this.isMenu = to.meta.is_footer === true;
    },

    // _isMobile() {
    //   if (this._isMobile()) {
    //     alert("手机端");
    //   } else {
    //     alert("pc端");
    //   }
    // },
  },
};
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  .app-content {
    width: 100%;
    height: 100%;
  }
  .app-content-footer {
    height: calc(100% - 98px);
  }
}
body {
  margin: 0;
  background-color: #f8f8f8;
  width: 100%;
  min-height: 100vh;
  position: relative;
}
</style>
