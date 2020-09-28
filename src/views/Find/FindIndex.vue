<template>
  <div class="Find por">
    <div class="player por">
      <!-- 视频 -->
      <video-player
        class="video-player vjs-custom-skin"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
      >
      </video-player>

      <!-- 弹屏幕 -->
      <vue-baberrage
        class="baberrage"
        :isShow="barrageIsShow"
        :barrageList="barrageList"
        :loop="barrageLoop"
      >
      </vue-baberrage>
    </div>
  </div>
</template>
<script>
import { MESSAGE_TYPE } from "vue-baberrage";

export default {
  data() {
    return {
      // 视频
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            withCredentials: false,
            type: "application/x-mpegURL", //播放类型，如果为rtmp配置为rtmp/mp4
            src: "http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8", //直播流地址
          },
        ],
        poster: "./static/image/banner/2.jpg", //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true, //全屏按钮
        },
      },

      // 弹屏幕
      msg: "Hello vue-baberrage",
      barrageIsShow: true,
      currentId: 0,
      barrageLoop: false,
      barrageList: [],
    };
  },
  components: {},
  methods: {
    onPlayerPlay(e) {},

    onPlayerPause(e) {
      console.log(e);
    },

    addToList() {
      this.barrageList.push(
        {
          id: ++this.currentId,
          avatar: "./static/image/banner/2.jpg",
          msg: this.msg,
          time: 1,
          type: MESSAGE_TYPE.NORMAL,
        },
        {
          id: ++this.currentId,
          avatar: "./static/image/banner/3.jpg",
          msg: "2222222222",
          time: 2,
          type: MESSAGE_TYPE.NORMAL,
        },
        {
          id: ++this.currentId,
          avatar: "./static/image/banner/4.jpg",
          msg: "333333333",
          time: 3,
          type: MESSAGE_TYPE.NORMAL,
        },
        {
          id: ++this.currentId,
          avatar: "./static/image/banner/6.jpg",
          msg: "444444444",
          time: 4,
          type: MESSAGE_TYPE.NORMAL,
        },
        {
          id: ++this.currentId,
          avatar: "./static/image/banner/2.jpg",
          msg: "5555555",
          time: 5,
          type: MESSAGE_TYPE.NORMAL,
        }
      );
    },
  },

  mounted() {
    this.addToList();
  },
};
</script>
<style scoped lang="scss">
.Find {
  width: 100%;
  height: 100%;

  .player {
    width: 100%;

    .video-player {
      // position: absolute;
      width: 100%;
      // top: 0;
      // z-index: 2;
    }
    .baberrage {
      // width: 100%;
      // top: 0;
      // z-index: 3;

      > div {
        z-index: 3;
      }
    }
  }
}
</style>
