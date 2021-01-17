<template>
  <v-app-bar app flat color="background">
    <v-app-bar-nav-icon
      v-if="shouldShowNav && isMobile"
      @click="$emit('toggle-sidebar', true)"
    />
    <HeaderNav v-if="shouldShowNav && !isMobile" />
    <v-spacer />
    <LocaleSelector />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import LocaleSelector from '~/components/LocaleSelector.vue'
import HeaderNav from '~/components/HeaderNav.vue'
import { isHomeRoute } from '~/utils/pages'

export default Vue.extend({
  name: 'Header',
  components: { HeaderNav, LocaleSelector },
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
