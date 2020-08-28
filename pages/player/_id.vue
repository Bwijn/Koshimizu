<template>
  <v-app>
    <div
      v-if="videoLoaded"
      class="video-player-box"

      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @ready="playerReadied"
      @statechanged="playerStateChanged($event)"
      v-video-player:myVideoPlayer="playerOptions">
    </div>
  </v-app>
</template>
<script>
// 一下是 SSR -------------------------------------------
// import axios from "@/.nuxt/axios";
import 'video.js/dist/video-js.css'
import Vue from 'vue'

if (process.browser) {
  window.videojs = require('video.js')
  require('video.js/dist/lang/zh-CN')

  const Vplayer = require('vue-video-player/dist/ssr')
  Vue.use(Vplayer)

  const hls = require('videojs-contrib-hls')
  Vue.use(hls)
}


// SPA -------------------------------------------------
// import 'video.js/dist/video-js.css'
//
// import { videoPlayer } from 'vue-video-player'


export default {
  // components: {
  //   videoPlayer
  // },
  data() {
    return {
      videoLoaded: false,


      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: 'application/x-mpegURL',
            src: '',
//             src: 'https://mei.huazuida.com/20200104/20705_f63cddc7/index.m3u8',
          }
        ],
        poster: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=40606c56972bd40746c7d4ff4b889e9c/377adab44aed2e73c29074528701a18b87d6fa57.jpg', //你的封面地址
        width: '100%',
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
      },
    }
  },
  mounted() {
    // console.log("Before Src: ", this.myVideoPlayer.sources[0].src);
    this.$axios.$get('/video/' + this.$route.params.id).then(res => {    // $route.params.id 取id值 获得对应视频数据item
      console.log(res);
      this.playerOptions.sources[0].src = res.url  // 将url赋值给播放器
      this.videoLoaded = !this.videoLoaded
    })


    console.log('this is current videojs instance object', this.myVideoPlayer)
  },

  computed: {
    playersrc() {
      return 'https://mei.huazuida.com/20200104/20705_f63cddc7/index.m3u8'
    }
  },

  methods: {
    ChangeSrc(player) {
      console.log(player);
      player.sources[0].src = "https://mei.huazuida.com/20200104/20705_f63cddc7/index.m3u8";
    },
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    // ...player event

    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied(player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    }
  },
  async asyncData({params, $axios}) {
    // console.log(await axios.get('https://api.myjson.com/bins/1dkbio'))
    let {data} = await $axios.get('/video/' + params.id)
    return {info: data}
  }


}
</script>
