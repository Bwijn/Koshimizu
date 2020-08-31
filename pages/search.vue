<template>

  <v-container v-if="info" class="grey lighten-5">
    <v-row
      v-for="n in info"
      :key="n.id"
    >
      <v-col>
        <v-card
          class="mx-auto"

        >


          <v-list-item
            :inactive="inactive"
          >
            <v-list-item-avatar
              tile
              :to="'/player/' + n.id"
              style=" cursor: pointer; "
              height="200"
              width="150"
              v-if="avatar">

              <v-img
                :src="n.cover"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>

              <v-list-item-title v-html="n.title"></v-list-item-title>
              <v-list-item-subtitle v-if="threeLine">主演：{{ n.starring }}</v-list-item-subtitle>
              <v-list-item-subtitle v-if="threeLine">简介：{{ n.brief }}</v-list-item-subtitle>
              <v-list-item-subtitle v-if="threeLine">分类：日剧</v-list-item-subtitle>
              <v-list-item-subtitle v-if="threeLine">地区：日本</v-list-item-subtitle>
              <v-list-item-subtitle v-if="threeLine">年份：2020</v-list-item-subtitle>
              <v-list-item-subtitle v-if="threeLine">更新：8：00</v-list-item-subtitle>

            </v-list-item-content>


          </v-list-item>


        </v-card>
      </v-col>
    </v-row>
    <h1 v-if="info.length===0"> 未搜到 </h1>

  </v-container>
</template>

<script>
export default {
  name: "search",
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


  watchQuery: true, // 查询参数改变时重新asyncData

  methods: {
    goto() {
      console.log("Vid:", this.$route.params.vid);
      this.$router.push('/player/' + this.$route.params.vid)
    }
  },

  async asyncData({params, route, $axios}) {
    console.log("params %o \n path %o\n query %o:", params, route.path, route.query);
    const data = await $axios.get("/search/", {params: {content: route.query.content}})
    // .then(res => {
    //   console.log("data:+++++++++++++", res.data);
    // })

    console.log('result data:🤩 ==> ',data.data);
    return {info: data.data}

  }


}


</script>

<style scoped>

</style>
