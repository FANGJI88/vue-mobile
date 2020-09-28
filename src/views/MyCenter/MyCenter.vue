<template>
  <div class="myCenter">
    <button @click="add">点我</button
    ><span>count:{{ this.$store.state.count }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: this.$store.state.count,
    };
  },
  mounted() {},
  methods: {
    add() {
      this.$store.commit("addCount", 10);
    },
  },
  components: {},
};
</script>
<style scoped lang="scss">
.myCenter {
  padding: 0.4rem;
  font-size: 0.4rem;
  button {
    margin-right: 0.133333rem;
  }
}
</style>
