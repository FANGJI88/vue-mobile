<template>
  <div class="about">
    <h1>这个我的</h1>
    <p v-if="!isLogin" @click="login">登录</p>
    <router-link  to="/">首页</router-link>
  </div>
</template>
<script>
export default {
  data(){
    return{
      isLogin: false
    }
  },
  mounted(){
    this.isLogin = localStorage.getItem('user')? true : false
  },
  methods:{
    login(){
      this.$router.push('/Login')
    }
  }
}
</script>
