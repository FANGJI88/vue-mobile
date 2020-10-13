<template>
  <div class="popup" v-if="isPopup">
    <div class="wrap">
      <!-- 标题 -->
      <div class="title">{{ title }}</div>
      <!-- 内容 -->
      <div class="content">{{ content }}</div>
      <div class="btn">
        <!-- 取消按钮 -->
        <p
          :style="{
            width: showConfirmButton ? '50%' : '100%',
            borderRight: showCancelButton ? '1px solid #f8f8f8' : '0',
            color: cancelButtonColor,
          }"
          v-if="showCancelButton"
        >
          {{ cancelButtonText }}
        </p>

        <!-- 确认按钮 -->
        <p
          :style="{
            width: showCancelButton ? '50%' : '100%',
            color: confirmButtonColor,
          }"
          v-if="showConfirmButton"
        >
          {{ confirmButtonText }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //弹窗显示与否
    isPopup: {
      type: Boolean,
      default: false,
    },

    // 弹窗宽度
    width: {
      type: String,
      default: "80%",
    },

    // 弹窗高度
    height: {
      type: String,
      default: "400px",
    },

    // 标题
    title: {
      type: String,
      default: "提示",
    },

    // 内容
    content: {
      type: String,
      default: "默认内容...",
    },

    // 是否展示确认按钮
    showConfirmButton: {
      type: Boolean,
      default: true,
    },

    // 是否取消按钮
    showCancelButton: {
      type: Boolean,
      default: false,
    },

    // 确认按钮文案
    confirmButtonText: {
      type: String,
      default: "确认",
    },

    // 取消按钮背景颜色
    cancelButtonText: {
      type: String,
      default: "取消",
    },

    // 确认按钮背景颜色
    confirmButtonColor: {
      type: String,
      default: "#ee0a24",
    },

    // 取消按钮背景颜色
    cancelButtonColor: {
      type: String,
      default: "#000",
    },
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {},
};
</script>

<style scoped lang="scss">
@import "./popup.scss";
</style>
