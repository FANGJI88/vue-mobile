<template>
  <div class="goodsList">
    <Navigation title="商品"></Navigation>
    <div class="main flex">
      <div class="left">
        <GoodsLeft></GoodsLeft>
      </div>
      <div class="right">
        <div class="right_top"><img src="/static/image/home/slt.png" alt=""> </div>
        <div class="right_content">
          <GoodsContent></GoodsContent>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navigation from "../../components/Navigation"
import GoodsLeft from "../../components/GoodsLeft"
import GoodsContent from "../../components/GoodContent"
export default {
  components:{
    Navigation,
    GoodsLeft,
    GoodsContent
  }
}
</script>
<style scoped lang="scss">
  .goodsList{
    width: 10rem;
    min-height: 100vh;
    padding-top: 1.066667rem;
    background-color: #f8f8f8;
    .main{
      margin-top: .266667rem;
      background-color: #fff;
      .left{
        width: 2.666667rem;
        height: 6.666667rem;
        padding: .133333rem 0;
      }
      .right{
        width: 71.5%;
        height: 6.666667rem;
        .right_top{
          width: 100%;
          height: 2.666667rem;
          margin-bottom: .2rem;
          img{
            width: 100%;
            height: 2.666667rem;
          }
        }
        .right_content{
          width: 100%;
          height: 3.733333rem;
          border: coral 1px dashed;
        }
      }
    }
  }
</style>