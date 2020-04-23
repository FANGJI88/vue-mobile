<template>
  <div class="myCenter">
    <button @click="add">点我</button><span>count:{{this.$store.state.count}}</span>
   
    <Menu :current="3" ></Menu>
  </div>
</template>
<script>
import Menu from "../../components/Menu"
export default {
  data(){
    return{
      count: this.$store.state.count,
    }
  },
  mounted(){
    
  },
  methods:{
   add(){
    this.$store.commit('addCount',10)
   }
  },
  components:{
    Menu
  }
}
</script>
<style scoped lang="scss">
  .myCenter{
    padding: .4rem;
    font-size: .4rem;
    button{
      margin-right: .133333rem;
    }
   
  }
</style>
