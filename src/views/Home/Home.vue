<template>
  <div class="home">
    <div class="floor flex">
      <div @click="newsList">新闻</div>
      <div @click="goodsList">商品</div>
      <div @click="courseList">课程</div>
      <div>其他</div>
    </div>
    <div class="news flex">
      <img src="/static/image/home/hdxq_hdxq_icon.png" alt="">
      <span>新闻公告</span>
    </div>
    <div class="news flex">
      <img src="/static/image/home/hdxq_hdxq_icon.png" alt="">
      <span>新闻公告</span>
    </div>
    <div class="news flex">
      <img src="/static/image/home/hdxq_hdxq_icon.png" alt="">
      <span>新闻公告</span>
    </div>
    <div class="news flex">
      <img src="/static/image/home/hdxq_hdxq_icon.png" alt="">
      <span>新闻公告</span>
    </div>

    <!-- 底部导航 -->
    <Menu :current="0" ></Menu>
  </div>
</template>

<script>
import Menu from "../../components/Menu"
// import Navigation from "../../components/Navigation"
export default {
  name: 'Home',
  data(){
    return{

    }
  },
  methods:{
    newsList(){
      this.$router.push('/NewsList')
    },
    goodsList(){
      this.$router.push('/GoodsList')
    },
    courseList(){
      this.$router.push('/CourseList')
    }
  },
  components: {
    Menu,
  }
}
</script>
<style scoped lang="scss">
  .home{
    background-color: #f8f8f8;
    color: #000;
    font-size: .346667rem;
    .floor{
      background-color: #fff;
      justify-content: space-around;
      width: 100%;
      padding: .266667rem .4rem;
      div{
        width: 1.6rem;
        height: 1.6rem;
        line-height: 1.6rem;
        text-align: center;
        background-color: palevioletred;
        color: #fff;
        border-radius: .333333rem;
      }
    }
    .news{
      margin-top: .266667rem;
      justify-content: flex-start;
      width: 100%;
      height: 1.066667rem;
      background-color: #fff;
      padding:  0 .4rem;
      img{
        width: .506667rem;
        height: .493333rem;
        margin-right: .133333rem;
      }
    }

  }
</style>
