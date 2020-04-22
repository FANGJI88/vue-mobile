<template>
  <div class="goodType">
    <ul>
      <li :class="{'active': index == current && index!=0}" v-for="(item,index) in type" :key="index" @click="chooseType(index)">{{item}}</li>
    </ul>
  </div>
</template>
<script>
// import brother from '../brother'
export default {
  data(){
    return{
      current: '',
      type:["热门推荐","手机","电脑","电视","空调","冰箱","电磁炉"]
    }
  },
  mounted(){
    this.$emit('type','0')
  },
  methods:{
    chooseType(index){
      this.current = index 
      this.$emit('type',String(index))
    }
  }
}
</script>
<style scoped lang="scss">
  .goodType{
    width: 2.666667rem ;
    background-color: #fff;
    ul{
      width: 100%;
      li{
        height: .933333rem;
        border-bottom: 1px solid #f8f8f8;
        text-align: center;
        line-height: .933333rem;
        &:first-child{
          font-weight: bold;
          color: coral;
        }
        &:last-child{
          border: 0;
        }
        &.active{
        background: coral;
      }
      }
     
    }
  }
</style>