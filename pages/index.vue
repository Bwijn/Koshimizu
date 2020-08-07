<template>

  <v-container class="grey lighten-5">
    <v-row>
      <v-col cols="12">
        <v-row

          no-gutters
        >
          <card
            v-for="n in 3"
            :key="n"
            class="ma-3 pa-6"
            outlined
            tile
          >
            Column
          </card>
        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import card from '~/components/card.vue'
export default {
  components: {
    Logo,
    VuetifyLogo,
    card,
  }
}
</script>
