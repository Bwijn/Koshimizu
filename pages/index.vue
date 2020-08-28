<template>

  <v-container class="grey lighten-5">

    <v-row v-for="(n,i) in 1"
           :key="n"
           class="mb-6"
           no-gutters
    >
      <v-col
        v-for="(n,i) in items"
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
    return {

    }
  },
  components: {
    Logo,
    VuetifyLogo,
    card,
  },

  async asyncData({params, $axios}) {
    const {data} = await $axios.get(`/vindex`)
    return {
      items: data
    }
  }

}
</script>
