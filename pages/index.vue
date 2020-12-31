<template>
  <!-- eslint-disable vue/no-v-html -->
  <v-row justify="center" align="center">
    <v-col cols="12" xs="12" sm="10" lg="8">
      <p
        class="text-h2 text-center mb-12 primary--text"
        v-html="$t('page.index.greeting')"
      />
      <div class="text-body-1 px-3">
        <p v-html="$t('page.index.introduction')" />
        <p v-html="$t('page.index.interests')" />
      </div>
      <div
        class="d-flex flex-column flex-sm-row justify-center align-center mt-12"
      >
        <v-btn
          v-for="page in filteredPages"
          :key="page.routeName"
          class="ma-2"
          color="primary"
          nuxt
          :to="localePath({ name: page.routeName })"
          v-text="$t(`nav.${page.translationKey}`)"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { Page, pages } from '~/utils/pages'

export default Vue.extend({
  computed: {
    filteredPages(): Page[] {
      // don't show link to home in home
      return pages.filter(
        (page) => !this.$nuxt.$route.name?.startsWith(page.routeName + '_')
      )
    }
  }
})
</script>
