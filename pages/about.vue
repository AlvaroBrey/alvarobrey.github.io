<template>
  <!-- eslint-disable vue/no-v-html -->
  <BasicPage :title="$t('page.about.title')">
    <p class="text-body-1 mt-2" v-html="$t('page.about.paragraph1')" />
    <p class="text-body-1 mt-3" v-html="$t('page.about.paragraph2')" />
  </BasicPage>
</template>

<script lang="ts">
import Vue from 'vue'
import BasicPage from '~/components/BasicPage.vue'

export default Vue.extend({
  components: { BasicPage },
  head() {
    return {
      title: this.$tc('nav.about')
    }
  }
})
</script>
