<template>
  <div class="course">
    <Navigation title="课程"></Navigation>
      <p>尊敬的会员，欢迎来到vuex</p>
      <div class="list" v-for="(item,index) in 4" :key="index" @click="jump(index)">vip{{index}}-{{index==0?'免费课程': (index == 1?'实战课程':'会员专享')}}</div>
      <div class="btn">充值</div>
  </div>
</template>
<script>
import Navigation from "../../components/Navigation"
export default {
  methods:{
    jump(index){
      this.$router.push({name:'CourseDtail',query:{vip:index}})
    }
  },
  components:{
    Navigation
  }
}
</script>
<style scoped lang="scss">
  .course{
    width: 100%;
    font-size: .4rem;
    padding: 1.066667rem .45rem 0;
    margin: .266667rem auto;
     p{
      padding: .3rem 0;
    }
    .list{
      width:6rem;
      height: 1.333333rem;
      text-align: center;
      line-height: 1.333333rem;
      background-color: coral;
      color: #fff;
      margin-bottom: .2rem;
    }
    .btn{
      width: 9rem;
      height: 1.066667rem;
      text-align: center;
      line-height: 1.066667rem;
      background-color: #42b983;
      color: #fff;
      margin-top: .6rem;
    }
  }
</style>