<template>

  <v-container class="grey lighten-5">

    <v-row v-for="n in 1"
           :key="n"
           class="mb-6"
           no-gutters
    >
      <v-col
        v-for="n in 5"
        :key="n"
        class="mb-6">

        <card
          :datalist="info"
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
// import axios from 'axios'

export default {
  data() {
    return {
      // data: null
      // OO:"PPP{}{}{}"
    }
  },
  created() {
    console.log("Created DATA", this.data,)
    console.log("Created INFO", this.info,)
  },
  components: {
    Logo,
    VuetifyLogo,
    card,
  },

  async asyncData({params, $axios}) {
    console.log('PPPPPPPPPPPPPPPOOOOOOOOOOOOO')
    // const {data} = await $axios.get(`/video/1`)
    return {
      info: {cover:"111"}
    }
  }

}
</script>
