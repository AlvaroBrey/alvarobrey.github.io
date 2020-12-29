<template>
  <v-app-bar app flat color="transparent">
    <v-spacer />
    <LocaleSelector />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import LocaleSelector from '~/components/LocaleSelector.vue'

export default Vue.extend({
  name: 'Header',
  components: { LocaleSelector }
})
</script>
