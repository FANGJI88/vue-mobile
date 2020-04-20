<template>
  <div class="home">
    <Navigation title="首页"></Navigation>
    <h1>这个是首页</h1>
    <router-link to="/MyCenter">我的</router-link>
    <Menu current= '0'></Menu>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "../../components/Menu"
import Navigation from "../../components/Navigation"
export default {
  name: 'Home',
  components: {
    Menu,
    Navigation
  }
}
</script>
<style scoped lang="scss">
  .home{
    padding-top: 1.066667rem;
  }
</style>
