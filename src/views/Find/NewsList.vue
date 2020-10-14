<template>
  <div class="NewsList">
    <Navigation title="新闻公告"></Navigation>
    <!-- <a :href="'tel:'+ phone">打电话</a> -->
    <div
      class="box"
      :class="{ boxheight: result === 1, boxInitHeight: result === 2 }"
      ref="NewsList"
    >
      触摸拖拽
    </div>

    <p class="point" @click="onLike">点我</p>

    <p class="popup" @click="isPopup = true">弹窗</p>

    <Popup
      ref="aaa"
      v-model="isPopup"
      :showCancelButton="true"
      @cancel="cancel"
      @confirm="confirm"
      :closeOnClickOverlay="true"
    >
      <div>
        这是slot的内容
        <img src="../../../public/static/image/banner/3.jpg" alt="" />
      </div>
    </Popup>
  </div>
</template>
<script>
import Navigation from "../../components/Navigation";
import Popup from "../../components/popup/popup";

export default {
  data() {
    return {
      phone: "13027429808",
      result: "",
      isPopup: false,
    };
  },
  components: {
    Navigation,
    Popup,
  },
  methods: {
    cancel() {
      console.log("取消了");
      this.isPopup = false;
    },

    confirm() {
      console.log("确认");
      this.isPopup = false;
    },

    //每个Touch对象包含的属性如下。
    //clientX：触摸目标在视口中的x坐标。
    // clientY：触摸目标在视口中的y坐标。
    // identifier：标识触摸的唯一ID。
    // pageX：触摸目标在页面中的x坐标。
    // pageY：触摸目标在页面中的y坐标。
    // screenX：触摸目标在屏幕中的x坐标。
    // screenY：触摸目标在屏幕中的y坐标。
    // target：触目的DOM节点目标。

    //touches：表示当前跟踪的触摸操作的touch对象的数组。
    //targetTouches：特定于事件目标的Touch对象的数组。
    //changeTouches：表示自上次触摸以来发生了什么改变的Touch对象的数组。

    touch(bodyElement) {
      var pageX = "",
        pageY = "",
        pageXend = "",
        pageYend = "";

      if (bodyElement) {
        // 监听触摸开始
        bodyElement.addEventListener("touchstart", (e) => {
          pageX = e.touches[0].pageX;
          pageY = e.touches[0].pageY;
          // e.preventDefault();  如果有滚动条，点盒子禁止滚动条滚动
        });

        // 监听触摸结束
        bodyElement.addEventListener("touchend", (e) => {
          pageXend = e.changedTouches[0].pageX;
          pageYend = e.changedTouches[0].pageY;
          this.resultTouch(pageX, pageY, pageXend, pageYend);
        });
      }
    },

    resultTouch(startX, startY, endX, endY) {
      // console.log("startY", startY);
      // console.log("endY", endY);

      let resultY = Math.abs(endY - startY);
      if (resultY > 120) {
        // 从上往下
        if (startY < endY) {
          this.result = 1;
        }
        // 从下往上
        else {
          this.result = 2;
        }
      }
    },

    // 点赞
    onLike(e) {
      this.$nextTick(() => {
        let div = document.createElement("div");
        const body = document.querySelector("body");

        let pagex = e.pageX,
          pageY = e.pageY;

        div.id = "count";
        div.innerHTML = "+1";

        div.style.top = `${pageY - 20}px`;
        div.style.left = `${pagex}px`;

        body.appendChild(div);

        setTimeout(() => {
          div.style.top = `${pageY - 120}px`;
          div.style.opacity = 0;

          setTimeout(() => {
            body.removeChild(div);
          }, 1500);
        });
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      let bodyElement = this.$refs.NewsList;
      this.touch(bodyElement);
    });
  },

  watch: {
    // isPopup(val) {
    //   if (val === true) {
    //     console.log(this.$children[1].$refs);
    //     // let dialog = this.$refs.aaa.$refs.dialog;
    //     // console.log(dialog, 1111111);
    //   }
    // },
  },
};
</script>
<style scoped lang="scss">
.NewsList {
  width: 100%;
  min-height: 100vh;
  padding-top: 1.066667rem;
  position: relative;
  .box {
    width: 600px;
    height: 600px;
    border: 1px salmon solid;
    text-align: center;
    line-height: 600px;
    color: cornflowerblue;
    font-size: 34px;
    margin: 30px auto 0;
    transition: 0.3s all linear;
    // 禁止触发默认的手势操作 ,同jse.preventDefault一样
    touch-action: none;
  }

  .boxheight {
    height: 900px;
    line-height: 900px;
  }

  .boxInitHeight {
    height: 600px;
    line-height: 600px;
  }

  p {
    width: 300px;
    height: 80px;
    background-color: coral;
    color: #ffffff;
    font-size: 36px;
    margin: 300px auto 0;
    border-radius: 30px;
    text-align: center;
    line-height: 80px;
    font-weight: 600;

    &:first-of-type {
      margin-bottom: 100px;
    }
  }
  .popup {
    margin-top: 0;
  }
}
</style>
