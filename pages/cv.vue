<template>
  <!-- eslint-disable vue/no-v-html -->
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-row no-gutters align="center" justify="center">
        <h4 class="text-h4 primary--text" v-html="$t('page.cv.title')" />
        <v-spacer />
        <v-btn
          color="primary"
          href="/files/AlvaroBreyVilas-cv.pdf"
          download
          target="_blank"
        >
          <v-icon left>mdi-file-pdf</v-icon>
          <span>PDF version</span>
        </v-btn>
      </v-row>
      <CVItemsFilter v-model="itemFilter" />
      <v-timeline :dense="$nuxt.$vuetify.breakpoint.mdAndDown">
        <CVTimelineItemDisplay
          v-for="(item, index) in sortedItems"
          :key="item.key"
          :item="item"
          :is-left="index % 2 === 1"
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
import { CVItemType, CVTimelineItem } from '~/model/CVModel'
import { Optional } from '~/types/utilityTypes'
import CVItemsFilter from '~/components/cv/CVItemsFilter.vue'

function getCompareDate(item: CVTimelineItem): Optional<moment.Moment> {
  return item.startDate ?? item.endDate
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
  },
  head() {
    return {
      title: this.$tc('nav.cv')
    }
  }
})
</script>
