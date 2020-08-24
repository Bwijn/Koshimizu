<template>
  <v-app>
    <div class="video-player-box"
         @play="onPlayerPlay($event)"
         @pause="onPlayerPause($event)"
         @ready="playerReadied"
         @statechanged="playerStateChanged($event)"
         v-video-player:myVideoPlayer="playerOptions">
    </div>


  </v-app>
</template>
<script>
import Vue from 'vue'
import 'video.js/dist/video-js.css'

if (process.browser) {
  window.videojs = require('video.js')
  require('video.js/dist/lang/zh-CN')

  const Vplayer = require('vue-video-player/dist/ssr')
  Vue.use(Vplayer)

  const hls = require('videojs-contrib-hls')
  Vue.use(hls)
  // window.videojs = Vplayer
  // require('video.js/dist/lang/zh-CN')

}

export default {
  data() {
    return {
      playerOptions: {
        // videojs options

        hls: true,  //启用hls？
        // fluid: true,  //设置播放器为流体  宽度为外层盒子大小  ps：想设置width：100%找不到方法？这个就对了
        // muted: false,
        language: 'zh-CN',

        // playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'application/x-mpegURL',
          src: 'https://mei.huazuida.com/20200104/20705_f63cddc7/index.m3u8'
        }],
        poster: "/static/images/author.jpg",
      }
    }
  },
  mounted() {
    console.log('this is current videojs instance object', this.myVideoPlayer)
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
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
  }
  // Omit the same parts as in the following component sample code
  // ...
}
</script>
