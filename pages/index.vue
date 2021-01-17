<template>
  <!-- eslint-disable vue/no-v-html -->
  <BasicPage>
    <template v-slot:title>
      <h2
        class="text-h2 text-center my-12 primary--text"
        v-html="$t('page.index.greeting')"
      />
    </template>
    <div class="px-3">
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
  </BasicPage>
</template>

<script lang="ts">
import Vue from 'vue'
import { isHomeRoute, Page, pages } from '~/utils/pages'
import BasicPage from '~/components/BasicPage.vue'

export default Vue.extend({
  components: { BasicPage },
  computed: {
    filteredPages(): readonly Page[] {
      // don't show link to home in home
      return pages.filter((page) => !isHomeRoute(page.routeName))
    }
  }
})
</script>
