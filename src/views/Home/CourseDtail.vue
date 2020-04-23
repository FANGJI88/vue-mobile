<template>
  <div class="detail">
    <h1>这是课程vip{{vip}}对应的详情</h1>
  </div>
</template>
<script>
export default {
  data(){
    return{
      vip: this.$route.query.vip
    }
  }
}
</script>
<style scoped>

</style>