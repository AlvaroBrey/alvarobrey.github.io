<template>
  <v-switch
    v-model="isDark"
    :aria-label="$t('aria.darkMode')"
    prepend-icon="mdi-white-balance-sunny"
    append-icon="mdi-moon-waning-crescent"
    color="primary"
    class="dark-mode-switcher ma-0"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { storeDarkValue } from '~/utils/darkTheme.js'

export default Vue.extend({
  name: 'DarkModeSwitcher',
  computed: {
    isDark: {
      get(): boolean {
        return this.$vuetify.theme.dark
      },
      set(value: boolean) {
        this.setValue(value)
      }
    }
  },
  methods: {
    setValue(value: boolean) {
      this.$vuetify.theme.dark = value
      storeDarkValue(value)
    }
  }
})
</script>

<style lang="scss">
.dark-mode-switcher {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 50;
}
</style>
