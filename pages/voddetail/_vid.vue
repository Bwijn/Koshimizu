<template>

  <v-container class="grey lighten-5">
    <v-row>
      <v-col>
        <v-card
          class="mx-auto"

        >


          <v-list-item
            :inactive="inactive"
          >
            <v-list-item-avatar
              tile
              @click="goto()"
              style=" cursor: pointer; "
              height="200"
              width="150"
              v-if="avatar">

              <v-img
                :src="this.info.cover"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>

              <v-list-item-title v-html="this.info.title"></v-list-item-title>
              <v-list-item-subtitle v-if="threeLine">主演：{{this.info.starring}}</v-list-item-subtitle>
              <v-list-item-subtitle v-if="threeLine">简介：{{ this.info.brief }}</v-list-item-subtitle>
              <v-list-item-subtitle v-if="threeLine">分类：日剧</v-list-item-subtitle>
              <v-list-item-subtitle v-if="threeLine">地区：日本</v-list-item-subtitle>
              <v-list-item-subtitle v-if="threeLine">年份：2020</v-list-item-subtitle>
              <v-list-item-subtitle v-if="threeLine">更新：8：00</v-list-item-subtitle>

            </v-list-item-content>


          </v-list-item>


        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>


export default {
  data: () => ({
    item: 5,
    disabled: false,


    threeLine: true,
    shaped: false,
    flat: false,
    subheader: true,
    inactive: false,
    subGroup: false,
    nav: false,
    avatar: true,
    rounded: false,
  }),
  methods:{
    goto(){
      console.log("Vid:",this.$route.params.vid);
      this.$router.push('/player/' + this.$route.params.vid)
    }
  },

  async asyncData({params, $axios}) {
    const {data} = await $axios.get(`/video/` + params.vid)
    return {
      info: data
    }
  },
  components: {}
}
</script>
