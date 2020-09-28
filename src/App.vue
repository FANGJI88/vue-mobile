<template>
  <div id="app">
    <div id="nav">
      <router-view></router-view>
    </div>
    <!-- 底部导航 -->
    <transition name="van-fade" mode="out-in">
      <Menu></Menu>
    </transition>
  </div>
</template>
<script>
import Menu from "../src/components/Menu";

export default {
  data() {
    return {};
  },
  components: {
    Menu,
  },
};
</script>
<style>
#app {
  color: #2c3e50;
}
body {
  margin: 0;
  background-color: #f8f8f8;
  width: 100%;
  min-height: 100vh;
}
</style>
