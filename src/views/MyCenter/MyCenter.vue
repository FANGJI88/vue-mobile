<template>
  <div class="about">
    <h1>这个我的</h1>
    <p @click="login">注册/登录</p>
    <router-link to="/">返回</router-link>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    login(){
      this.$router.push('/Login')
    }
  }
}
</script>
