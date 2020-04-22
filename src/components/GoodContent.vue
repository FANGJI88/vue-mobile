<template>
  <!-- <div class="goodContent">{{content[current]}}</div> -->
  <div class="goodContent">{{content}}</div>
</template>
<script>
// import brother from '../brother'
export default {
  name: 'GoodContent',
  data(){
    return{
      content: '这是手机内容',
      index: '0'
    }
  },
  // created(){
  //   this.index = this.current
  // },
  watch:{
    current:function(newVal,oldVal){
      this.index = newVal
      switch (this.current) {
        case '0':
          this.content = '这是手机内容'
          break;
        case '1':
          this.content = '这是手机内容'
          break;
        case '2':
          this.content = '这是电脑内容'
          break;
        case '3':
          this.content = '这是电视内容'
          break;
        case '4':
          this.content = '这是空调内容'
          break;
        case '5':
          this.content = '这是冰箱内容'
          break;
        case '6':
          this.content = '这是电磁炉内容'
          break;
      }
    }
  },
  props:{
    current: {
      type: String,
      default: '0'
    }
  },

}
</script>
<style scoped>
  .goodContent{
    padding: .266667rem .4rem 0;
    
  }
</style>