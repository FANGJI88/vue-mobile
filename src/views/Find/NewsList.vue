<template>
  <div class="course">
    <Navigation title="新闻公告"></Navigation>
    <a :href="'tel:'+ phone">打电话</a>
  </div>
</template>
<script>
import Navigation from "../../components/Navigation"
export default {
  data(){
    return{
      phone:'13027429808'
    }
  },
  components:{
    Navigation
  }
}
</script>
<style scoped lang="scss">
  .course{
    padding-top: 1.066667rem;
  }
</style>