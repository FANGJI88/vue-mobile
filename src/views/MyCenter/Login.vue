<template>
  <div class="Login">
    <p>用户名：<input type="text" v-model="userName"></p>
    <p>密码：<input type="password" v-model="password"></p>
    <p class="btn" @click="Login">登陆</p>
  </div>
</template>
<script>
export default {
  data(){
    return{
      userName: '',
      password: ''
    }
  },
  methods:{
    Login(){
      let _this = this

      if(this.userName && this.password){  //有值就 跳转到首页，并且设置缓存，记录已经登陆
        localStorage.setItem('user',{name: this.userName, password: this.password})
        localStorage.setItem('overTime', 10000 )
        setTimeout(()=>{
          _this.$router.push("/")
        },500)
      }else{
        alert('请输入用户名和密码')
      }

      
    }
  }
}
</script>
<style scoped lang='scss'>
  .Login{
    .btn{
      width: 60px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border:  1px solid steelblue;
      border-radius: 10px;
      color: steelblue;
      margin: 0 auto;
    }
  }
</style>