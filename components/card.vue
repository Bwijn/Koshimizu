<template>
  <v-card
    :to="{ path: '/voddetail/'+ datalist.id ,}"
    max-width="200"
    height="33vh"
    class="ma-auto"
  >
    <v-list-item>

      <v-list-item-content>
        <v-list-item-title>{{ datalist.title }}</v-list-item-title>
        <!--        <v-list-item-subtitle>{{datalist.brief}}</v-list-item-subtitle>-->
      </v-list-item-content>
    </v-list-item>

    <v-img
      :src="datalist.cover"
      height="192"
    ></v-img>

    <!--    <v-card-text>-->
    <!--      {{datalist.brief}}-->
    <!--    </v-card-text>-->


  </v-card>
</template>
<script>

export default {
  name: 'card',
  props: ["datalist"],
  created() {
    // console.log(this.datalist)


  },


}
</script>
