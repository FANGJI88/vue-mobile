import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "lib-flexible";
import "amfe-flexible";

import Vant from "vant";
import "vant/lib/index.css";
import "./assets/reset.css";

import VideoPlayer from "vue-video-player";
import "videojs-contrib-hls"; //单是 RTMP 的话不需要第三方库，如果是 HLS 的话需要引入videojs-contrib-hls，看具体情况而定。

//涉及到源码样式要更改所以这里静态引入
// import vueBaberrage from "../static/vue-baberrage";
// Vue.use(vueBaberrage);

//不需要更改源码样式的话
import { vueBaberrage } from "vue-baberrage";
Vue.use(vueBaberrage);

// 全局混入
import mixins from "./mixins/index";
Vue.mixin(mixins);

require("video.js/dist/video-js.css");
require("vue-video-player/src/custom-theme.css");

Vue.use(VideoPlayer);
Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
