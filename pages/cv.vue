<template>
  <!-- eslint-disable vue/no-v-html -->
  <v-row justify="center" align="center">
    <v-col cols="12">
      <h4
        class="text-h4 mb-8 primary--text px-3"
        v-html="$t('page.cv.title')"
      />
      <i18n path="page.cv.introduction" tag="p" class="px-3">
        <a
          href="/downloads/AlvaroBreyVilas_CV_en.pdf"
          download
          target="_blank"
          v-text="$t('page.cv.introductionLinkHere')"
        />
      </i18n>
      <v-timeline :dense="$nuxt.$vuetify.breakpoint.smAndDown">
        <CVTimelineItemDisplay
          v-for="item in sortedItems"
          :key="item.translationKey"
          :item="item"
        />
      </v-timeline>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { CVTimelineItems } from '~/data/CVData'
import CVTimelineItemDisplay from '~/components/cv/CVTimelineItemDisplay.vue'
import { CVTimelineItem } from '~/model/CVModel'
// TODO update and upload CV

function sortTimelineItems(a: CVTimelineItem, b: CVTimelineItem): number {
  if (a.endDate === undefined) {
    return 1
  }
  if (b.endDate === undefined) {
    return -1
  }
  return a.endDate.unix() - b.endDate.unix()
}

export default Vue.extend({
  components: { CVTimelineItemDisplay },
  data() {
    return {
      reverseOrder: false
    }
  },
  computed: {
    sortedItems(): CVTimelineItem[] {
      const items = CVTimelineItems.sort(sortTimelineItems)
      if (this.reverseOrder) {
        return items.reverse()
      }
      return items
    }
  }
})
</script>
