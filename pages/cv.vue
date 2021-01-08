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
      <v-row class="px-3" no-gutters>
        <CVItemsFilter v-model="itemFilter" />
        <v-spacer />
        <v-switch
          v-model="reverseOrder"
          :label="$t('page.cv.oldestFirst')"
          class="mt-0"
        />
      </v-row>
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
import moment from 'moment'
import { CVTimelineItems } from '~/data/CVData'
import CVTimelineItemDisplay from '~/components/cv/CVTimelineItemDisplay.vue'
import { CVItemType, CVTimelineItem, isWithStartDate } from '~/model/CVModel'
import { Optional } from '~/types/utilityTypes'
import CVItemsFilter from '~/components/cv/CVItemsFilter.vue'
// TODO update and upload CV

function getCompareDate(item: CVTimelineItem): Optional<moment.Moment> {
  if (isWithStartDate(item)) {
    return item.startDate
  }
  return item.endDate
}

function sortTimelineItems(a: CVTimelineItem, b: CVTimelineItem): number {
  const aDate = getCompareDate(a)
  const bDate = getCompareDate(b)
  if (aDate === undefined) {
    return -1
  }
  if (bDate === undefined) {
    return 1
  }
  return bDate.unix() - aDate.unix()
}

export default Vue.extend({
  components: { CVItemsFilter, CVTimelineItemDisplay },
  data() {
    return {
      reverseOrder: false,
      itemFilter: undefined as Optional<CVItemType>
    }
  },
  computed: {
    sortedItems(): CVTimelineItem[] {
      let items = CVTimelineItems.sort(sortTimelineItems)
      if (this.itemFilter) {
        items = items.filter((item) => item.type === this.itemFilter)
      }
      if (this.reverseOrder) {
        items = items.reverse()
      }
      return items
    }
  }
})
</script>
