<template>
  <div class="NewsList" ref="NewsList">
    <Navigation title="新闻公告"></Navigation>
    <!-- <a :href="'tel:'+ phone">打电话</a> -->
  </div>
</template>
<script>
import Navigation from "../../components/Navigation";
export default {
  data() {
    return {
      phone: "13027429808",
    };
  },
  components: {
    Navigation,
  },
  methods: {
    //每个Touch对象包含的属性如下。
    //clientX：触摸目标在视口中的x坐标。
    // clientY：触摸目标在视口中的y坐标。
    // identifier：标识触摸的唯一ID。
    // pageX：触摸目标在页面中的x坐标。
    // pageY：触摸目标在页面中的y坐标。
    // screenX：触摸目标在屏幕中的x坐标。
    // screenY：触摸目标在屏幕中的y坐标。
    // target：触目的DOM节点目标。

    touch() {
      let bodyElement = this.$refs.NewsList;
      bodyElement.addEventListener("touchstart", (e) => {
        console.log(e);
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.touch();
    });
  },
};
</script>
<style scoped lang="scss">
.NewsList {
  width: 100%;
  height: 100vh;
  padding-top: 1.066667rem;
}
</style>
