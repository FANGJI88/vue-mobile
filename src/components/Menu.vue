<template>
  <div class="menu pof flex">
    <div class="wrap flex"  v-for="(item,index) in nav" :key="index" @click="selecNav(index,item)">
      <img :src="current==index? item.delect :item.defaule" alt="">
      <span :class="{'active': current == index}">{{item.navTitle}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      nav:[
        {
          defaule: '/static/image/home/home_index_1.png',
          delect: '/static/image/home/home_index_2.png',
          navTitle: '首页',
          router:'/'
        },
        {
          defaule: '/static/image/home/home_fx_1.png',
          delect: '/static/image/home/home_fx_2.png',
          navTitle: '发现',
          router:'/Find'
        },
        {
          defaule: '/static/image/home/home_dd_1.png',
          delect: '/static/image/home/home_dd_2.png',
          navTitle: '订单',
          router:'/Order'
        },
        {
          defaule: '/static/image/home/home_wd_1.png',
          delect: '/static/image/home/home_wd_2.png',
          navTitle: '我的',
          router:'/MyCenter'
        },
      ],
    }
  },
  methods:{
    selecNav(index,item){
      if(this.current != index){
        this.current = index
        this.$router.push(item.router)
      }
    }
  },
  props:{
    current:{
      type: Number,
      defaule: 0
    }
  }
}
</script>
<style scoped lang="scss">
  .menu{
    width: 10rem;
    height: 1.333333rem;
    bottom: 0;
    flex: 1;
    z-index: 100;
    color: #9C9C9C;
    font-size: .32rem;
    justify-content: space-around;
    border-top: 1px solid #F8F8F8;
    box-shadow: .133333rem 0 .066667rem #f5f5f5;
    .wrap{
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img{
        width: .666667rem;
        height: .666667rem;
        margin-bottom: .04rem;
      }
      .active{
        color: #42b983;
        font-weight: bold;
      }
    }
  }
</style>