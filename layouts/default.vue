<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :to="item.path"
          :key="item.text"
          link
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title class="text-subtitle-2 ">

              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1">热门分类</v-subheader>
        <v-list>
          <v-list-item

            v-for="item in items2"
            :to="item.path"
            :key="item.text"
            link
          >
            <v-list-item-avatar>
              <img
                :src=item.picture
                alt=""
              >
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>

        <v-list-item link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      color="blue lighten-2"
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>


      <nuxt-link to="/">
        <v-icon
          class="mx-4"
          large

        >
          mdi-youtube
        </v-icon>
      </nuxt-link>

      <v-toolbar-title
        class="mr-12 white--text align-center">
        <span class="title">
          Ami
          <!--          小清水日语罗马音-->
        </span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-row
        align="center"
        style="max-width: 650px"
      >
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="搜索. . ."
          single-line
          append-icon="mdi-magnify"
          color="white"
          hide-details
        ></v-text-field>
      </v-row>
    </v-app-bar>

    <v-main>
      <nuxt></nuxt>
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  method: {
    tohome() {
      this.$router.push('/')
    }
  },
  data: () => ({
    drawer: null,
    items: [
      {icon: 'mdi-trending-up', text: '热播', path: "/popular"},

      {icon: 'mdi-history', text: '看过', path: "history"},

    ],
    items2: [
      {
        picture: 'https://i0.hdslb.com/bfs/tag/5f42290e9299eceb7dfce4b932b497d1255ea847.jpg@75w_75h_1c_100q.webp',
        text: '动漫',
        path: "/vlist/anime"
      },
      {
        picture: 'https://i0.hdslb.com/bfs/archive/4afb90b88597f226d22fdaed28a5c4769b372fdc.png@75w_75h_1c_100q.webp',
        text: '日剧',
        path: "/vlist/jptv"

      },
      {
        picture: 'https://i0.hdslb.com/bfs/tag/9e5e70fba1281cc421d2d7f1d205f510b53f90a3.png@60w_60h_1c_100q.webp',
        text: '电影',

        path: "/vlist/movie",
      },
      // { picture: 58, text: 'Nokia' },
      // { picture: 78, text: 'MKBHD' },
    ],
  }),
  created() {
    // this.$vuetify.theme.light = true
  },

}
</script>
<style>
.nuxt-link-active {
  text-decoration: none;
}
</style>
