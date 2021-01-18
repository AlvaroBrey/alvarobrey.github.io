<template>
  <div>
    <v-app-bar v-if="shouldShowNav" :flat="!isMobile" app color="background">
      <v-app-bar-nav-icon
        v-if="isMobile"
        @click="$emit('toggle-sidebar', true)"
      />
      <HeaderNav v-else />
      <v-spacer />
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderNav from '~/components/HeaderNav.vue'
import { isHomeRoute } from '~/utils/pages'

export default Vue.extend({
  name: 'Header',
  components: { HeaderNav },
  computed: {
    shouldShowNav(): boolean {
      return !isHomeRoute(this.$nuxt.$route.name)
    },
    isMobile(): boolean {
      return this.$nuxt.$vuetify.breakpoint.smAndDown
    }
  }
})
</script>
