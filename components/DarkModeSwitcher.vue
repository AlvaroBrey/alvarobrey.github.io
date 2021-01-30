<template>
  <v-switch
    hide-details
    v-model="isDark"
    :aria-label="$t('aria.darkMode')"
    :prepend-icon="icons.mdiWhiteBalanceSunny"
    :append-icon="icons.mdiMoonWaningCrescent"
    color="primary"
    class="ma-0"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiMoonWaningCrescent, mdiWhiteBalanceSunny } from '@mdi/js'
import { storeDarkValue } from '~/utils/darkTheme.js'

export default Vue.extend({
  name: 'DarkModeSwitcher',
  data() {
    return {
      icons: {
        mdiWhiteBalanceSunny,
        mdiMoonWaningCrescent
      }
    }
  },
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
