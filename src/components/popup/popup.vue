<template>
  <div class="wrap" v-if="isPopup">
    <!-- 遮罩层 -->
    <div class="popup" v-if="overlay" @click="close"></div>

    <!-- 弹窗 -->
    <div class="dialog">
      <div
        class="dialog-wrap"
        ref="dialog"
        @mousedown="mousedown"
        draggable="true"
      >
        <!-- 标题 -->
        <div class="title">{{ title }}</div>
        <!-- 内容 -->
        <div class="content">
          {{ content }}
          <slot></slot>
        </div>
        <div class="btn">
          <!-- 取消按钮 -->
          <p
            :style="{
              width: showConfirmButton ? '50%' : '100%',
              borderRight: showCancelButton ? '1px solid #f8f8f8' : '0',
              color: cancelButtonColor,
            }"
            v-if="showCancelButton"
            @click="cancel"
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
            @click="confirm"
          >
            {{ confirmButtonText }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClick: false,
    };
  },

  // 更改父组件的 isPopup 属性
  model: {
    prop: "isPopup",
    event: "autoModel",
  },

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

    // 标题
    title: {
      type: String,
      default: "提示",
    },

    // 内容
    content: {
      type: String,
      default: "",
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

    // 是否点击遮罩层后关闭弹窗
    closeOnClickOverlay: {
      type: Boolean,
      default: false,
    },

    overlay: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },

  methods: {
    confirm() {
      this.$emit("confirm");
    },

    cancel() {
      // this._events.cancel 判断父组件 是否有自定义 事件 cansel
      // 如果有，就回调一个方法，否则就默认关闭弹窗不进行操作

      if (this._events.cancel) {
        this.$emit("cancel");
      } else {
        this.$emit("autoModel", false);
      }
    },

    close() {
      if (this.closeOnClickOverlay) {
        this.$emit("autoModel", false);
      }
    },

    mousedown(e) {
      this.isClick = true;

      // 判断设备时在 移动端还是pc端
      // 方法定义在app;
      if (!this._isMobile() && this.isPopup) {
        // alert("pc端");

        const dialog = this.$refs.dialog;
        // console.log(dialog);
        if (dialog) {
          dialog.style.cursor = "move";

          let x = e.clientX,
            y = e.clientY,
            offserLeft = e.offsetLeft,
            offserTop = e.offsetTop;

          dialog.addEventListener("mousemove", (e) => {
            let clientX = e.clientX,
              clientY = e.clientY;

            if (this.isClick == true) {
              dialog.style.left = clientX - (x - offserLeft) + "px";
              dialog.style.left = clientY - (y - offserTop) + "px";
            }
          });

          dialog.addEventListener("mouseup", () => {
            this.isClick = false;
            dialog.style.cursor = "default";
          });
        }
      }
    },
  },

  mounted() {
    this.$nextTick(() => {});
  },
};
</script>

<style scoped lang="scss">
@import "./popup.scss";
</style>
