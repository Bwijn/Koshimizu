<template>

  <v-container class="grey lighten-5">

    <v-row v-for="(inst,i) in 1"
           :key="i"
           class="mb-6"
           no-gutters
    >
      <v-col
        v-for="(n,i) in $store.state.index_items"
        :key="i"
        class="mb-6">

        <card
          :datalist="n"
        >
        </card>

      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import card from '~/components/card.vue'

export default {
  data() {
    return {}
  },
  components: {
    Logo,
    VuetifyLogo,
    card,
  },

  async fetch({store,$axios}) {

    return await $axios.$get("/vindex").then(res => {
      console.log("VINDEX RES", res);
      store.commit('fill_items',res)
    })
    // console.log('vindex',$axios);
    // store.commit('fill_items')

  }


}
</script>
