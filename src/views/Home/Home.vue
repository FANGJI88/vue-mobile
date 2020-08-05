<template>
  <div class="home">
    <!-- banner -->
    <div class="banner por">
      <div class="img-wrap">
        <img class="" :class="{'active': index == 0}" v-for="(item,index) in 3" :key="index" :src="`/static/image/banner/${index+2}.jpg`" alt />
      </div>
      <div class="dit poa">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="floor flex">
      <div @click="newsList">新闻</div>
      <div @click="goodsList">商品</div>
      <div @click="courseList">课程</div>
      <div>其他</div>
    </div>
    <div class="news flex">
      <img src="/static/image/home/hdxq_hdxq_icon.png" alt />
      <span>新闻公告</span>
    </div>
    <div class="news flex">
      <img src="/static/image/home/hdxq_hdxq_icon.png" alt />
      <span>新闻公告</span>
    </div>
    <div class="news flex">
      <img src="/static/image/home/hdxq_hdxq_icon.png" alt />
      <span>新闻公告</span>
    </div>
    <div class="news flex">
      <img src="/static/image/home/hdxq_hdxq_icon.png" alt />
      <span>新闻公告</span>
    </div>

    <!-- 底部导航 -->
    <Menu :current="0"></Menu>
  </div>
</template>

<script>
import Menu from "../../components/Menu";
// import Navigation from "../../components/Navigation"
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    newsList() {
      this.$router.push("/NewsList");
    },
    goodsList() {
      this.$router.push("/GoodsList");
    },
    courseList() {
      this.$router.push("/CourseList");
    }
  },
  components: {
    Menu
  }
};
</script>
<style scoped lang="scss">
.home {
  height: 100%;
  color: #000;
  font-size: 0.346667rem;
  .banner {
    width: 100%;
    height: 300px;
    margin-bottom: 30px;
    overflow: hidden;
    .img-wrap{
      width: auto;
      height: 100%;
      overflow-x: auto;
      > img {
      width: 750px;
      height: 100%;
      display: inline-block;
    }
    }
    

    .dit{
      width: 750px;
      top:none;
      bottom: 20px;
      left: calc(750px/2);
      transform: translate(calc(-(750px/2)),0);
      span{
        display: inline-block;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: slategray;
        margin-right: 20px;
        &:last-of-type{
          margin-right: 0;
        }
        &.active{
          background-color: #fff;
        }
      }
    }
  }
  .floor {
    background-color: #fff;
    justify-content: space-around;
    width: 100%;
    padding: 0.266667rem 0.4rem;
    div {
      width: 1.6rem;
      height: 1.6rem;
      line-height: 1.6rem;
      text-align: center;
      background-color: palevioletred;
      color: #fff;
      border-radius: 0.333333rem;
    }
  }
  .news {
    margin-top: 0.266667rem;
    justify-content: flex-start;
    width: 100%;
    height: 1.066667rem;
    background-color: #fff;
    padding: 0 0.4rem;
    img {
      width: 0.506667rem;
      height: 0.493333rem;
      margin-right: 0.133333rem;
    }
  }
}
</style>
