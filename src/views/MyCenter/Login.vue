<template>
  <div class="Login">
    <input />用户名：<input type="text" v-model="userName" />
    <input />密码：<input type="password" v-model="password" />
    <p class="btn" @click="Login">登陆</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    Login() {
      let _this = this;

      if (this.userName && this.password) {
        //有值就 跳转到首页，并且设置缓存，记录已经登陆
        localStorage.setItem("user", {
          name: this.userName,
          password: this.password,
        });
        localStorage.setItem("overTime", 1000000);
        setTimeout(() => {
          _this.$router.push("/");
        }, 500);
      } else {
        alert("请输入用户名和密码");
      }

      let tokenTime = localStorage.getItem("overTime");
      setTimeout(() => {
        //判断一下是否过期，超过时间就清除缓存
        localStorage.removeItem("user");
      }, tokenTime);
    },
  },
};
</script>
<style scoped lang="scss">
.Login {
  input {
    width: 200px;
    height: 60px;
    line-height: 60px;
    margin-bottom: 20px;
    border: 1px solid slategrey;
  }
  .btn {
    width: 60px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border: 1px solid steelblue;
    border-radius: 10px;
    color: steelblue;
    margin: 0 auto;
  }
}
</style>
