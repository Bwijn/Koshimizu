<template>

  <v-container class="grey lighten-5">

    <v-row v-for="n in 2"
           :key="n"
           class="mb-6"
           no-gutters
    >
      <v-col
        v-for="n in 5"
        :key="n"
        class="mb-6">

        <card
:yyy="yyy"
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
  data(){
    return{
      yyy:"/voddetail"
    }
  },
  components: {
    Logo,
    VuetifyLogo,
    card,
  }
}
</script>
