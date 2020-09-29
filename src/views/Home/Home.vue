<template>
  <div class="home">
    <!-- banner -->
    <div class="banner por">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- menu分类 -->
    <div class="floor flex">
      <div @click="$router.push('/NewsList')">新闻</div>
      <div @click="$router.push('/GoodsList')">商品</div>
      <div @click="$router.push('/CourseList')">课程</div>
      <div>其他</div>
    </div>
    <!-- 公告占位符 -->
    <div class="news flex" v-for="(item, index) in 13" :key="index">
      <img src="/static/image/home/hdxq_hdxq_icon.png" alt />
      <span>新闻公告</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      images: [
        `/static/image/banner/2.jpg`,
        "/static/image/banner/2.jpg",
        "/static/image/banner/3.jpg",
        "/static/image/banner/4.jpg",
      ],
    };
  },
  methods: {},
  components: {},
};
</script>
<style scoped lang="scss">
.home {
  height: 100%;
  color: #000;
  font-size: 0.346667rem;

  .banner {
    width: 100%;
    height: 400px;
    margin-bottom: 30px;
    overflow: hidden;
    img {
      width: 750px;
      height: 400px;
      display: inline-block;
      object-fit: cover;
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
