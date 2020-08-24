<template>
  <v-card
    to="/voddetail"
    max-width="200"

    class="ma-auto"
  >
    <v-list-item>

      <v-list-item-content>
        <v-list-item-title>半泽直树2</v-list-item-title>
        <v-list-item-subtitle>更新至第3集</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img
      :src="datalist.cover"
      height="192"
    ></v-img>

    <v-card-text>
      Visit ten places on our planet that are undergoing the biggest changes today.
    </v-card-text>


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
