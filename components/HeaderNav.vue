<template>
  <v-tabs centered>
    <v-tab
      v-for="page in pages"
      :key="page.routeName"
      nuxt
      :to="localePath({ name: page.routeName })"
      v-text="$t(`nav.${page.translationKey}`)"
    />
  </v-tabs>
</template>

<script lang="ts">
import Vue from 'vue'
import { Page, pages } from '~/utils/pages'

export default Vue.extend({
  name: 'HeaderNav',
  computed: {
    pages(): readonly Page[] {
      return pages
    }
  }
})
</script>
