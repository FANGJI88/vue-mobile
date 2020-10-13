<template>
  <div id="id_test_video" style="width:100%; height:auto;"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    var player = new window.TcPlayer("id_test_video", {
      // http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8   网上的直播流 （腾讯云工具包）

      m3u8: "http://test.liveplay.longtontech.com/live/liveteststream.m3u8", //请替换成实际可用的播放地址
      // flv: "http://2157.liveplay.myqcloud.com/live/2157_358535a.flv", //增加了一个 flv 的播放地址，用于PC平台的播放 请替换成实际可用的播放地址

      width: "880", //视频的显示宽度，请尽量使用视频分辨率宽度
      height: "320", //视频的显示高度，请尽量使用视频分辨率高度,

      autoplay: true, //iOS 下 safari 浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
      poster: "http://www.test.com/myimage.jpg", // 简单设置封面
    });
  },
};
</script>

<style></style>
