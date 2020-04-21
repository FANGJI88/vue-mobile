<template>
  <div class="goodContent">{{content}}</div>
</template>
<script>
import brother from '../brother'
export default {
  data(){
    return{
      content:''
    }
  },
  created(){
    brother.$on('type',(val)=>{
      switch (val) {
        case 1:
          this.content = '这是手机内容'
          break;
        case 2:
          this.content = '这是电脑内容'
          break;
        case 3:
          this.content = '这是电视内容'
          break;
        case 4:
          this.content = '这是空调内容'
          break;
        case 5:
          this.content = '这是冰箱内容'
          break;
        case 6:
          this.content = '这是电磁炉内容'
          break;
        default:
          this.content = '这是手机内容'
          break;
      }
    })
  }
}
</script>
<style scoped>
  .goodContent{
    padding: .266667rem .4rem 0;
    
  }
</style>