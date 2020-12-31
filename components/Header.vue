<template>
  <v-app-bar app flat color="background">
    <HeaderNav v-if="shouldShowNav" />
    <v-spacer />
    <LocaleSelector />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import LocaleSelector from '~/components/LocaleSelector.vue'
import HeaderNav from '~/components/HeaderNav.vue'

export default Vue.extend({
  name: 'Header',
  components: { HeaderNav, LocaleSelector },
  computed: {
    shouldShowNav(): boolean {
      return !this.$nuxt.$route.name?.startsWith('index_')
    }
  }
})
</script>
