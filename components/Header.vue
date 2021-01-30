<template>
  <div>
    <v-app-bar :flat="!isMobile" app class="main-app-bar">
      <template v-if="shouldShowNav">
        <v-app-bar-nav-icon
          v-if="isMobile"
          @click="$emit('toggle-sidebar', true)"
        />
        <HeaderNav v-else />
      </template>
      <v-spacer />
      <div class="right-controls d-flex align-center">
        <DarkModeSwitcher />
        <LocaleSelector />
      </div>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderNav from '~/components/HeaderNav.vue'
import { isHomeRoute } from '~/utils/pages'
import DarkModeSwitcher from '~/components/DarkModeSwitcher.vue'
import LocaleSelector from '~/components/LocaleSelector.vue'

export default Vue.extend({
  name: 'Header',
  components: { DarkModeSwitcher, HeaderNav, LocaleSelector },
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

<style lang="scss" scoped>
.main-app-bar {
  position: relative;
}
.right-controls {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 50;
}
</style>
