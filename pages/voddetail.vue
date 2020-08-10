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
                height="200"
                width="150"
                v-if="avatar">

                <v-img :src="items[0].avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>

                <v-list-item-title v-html="items[0].title"></v-list-item-title>
                <v-list-item-subtitle v-if="threeLine" >主演：{{items[0].Starring}}</v-list-item-subtitle>
                <v-list-item-subtitle v-if="threeLine" >简介：{{items[0].subtitle}}</v-list-item-subtitle>
                <v-list-item-subtitle v-if="threeLine" >分类：日剧  地区：日本  年份：2020  更新：08.06</v-list-item-subtitle>

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
    items: [
      {
        avatar: 'https://tu.tianzuida.com/pic/upload/vod/2020-07-30/202007301596068146.jpg',
        title: '龙道 双面复仇者',
        Starring:"玉木宏 高桥一生 松本穗香 远藤宪一 齐藤由贵 细田",
        subtitle: "玉木饰演混入黑道的哥哥龙一，高桥饰演掌握职权的国土交通省官僚弟弟龙二。本剧讲述了二人为了替被快递公司社长逼死的养父母复仇雪恨的故事",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
      },
    ],
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
  components: {}
}
</script>
