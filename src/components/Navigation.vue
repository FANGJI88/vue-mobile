<template>
  <div class="Navigation pof flex">
    <div class="picker flex" @click="goback">
      <img class="back" src="/static/image/home/pre.png">
      <span>返回</span>
    </div>
    <div>{{title}}</div>
    <div class="picker flex" @click="jumpHome">
      <img class="home" src="/static/image/home/home.png">
      <span>首页</span>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
     
    }
  },
  mounted(){
    
  },
  methods:{
    goback(){
      this.$router.go(-1)
    },
    jumpHome(){
      this.$router.push('/')
    }
  },
  props:{
    title:{
      type: String,
      default: '标题'
    }
  }
}

</script>
<style scoped lang='scss'>
  .Navigation{
    top: 0;
    z-index: 100;
    width: 10rem;
    height: 1.066667rem;
    padding: 0 .4rem;
    background-color: #42b983;
    color: #fff;
    font-size: .373333rem;
    .picker{
      justify-content: flex-start;
      width: 20%;
      height: 100%;
      .back{
        width: .266667rem;
        height: .4rem;
        margin-right: .066667rem;
      }
      .home{
        width: .453333rem;
        height: .4rem;
        margin-right: .066667rem;
      }
    }
    .picker:last-child{
      justify-content: flex-end;
    }

  }
</style>