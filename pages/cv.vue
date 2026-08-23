<template>
  <!-- eslint-disable vue/no-v-html -->
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-row no-gutters align="center" justify="center">
        <h4 class="text-h4 primary--text" v-html="$t('page.cv.title')" />
        <v-spacer />
        <v-btn
          class="secondary--text"
          color="primary"
          :href="pdfHref"
          download
          target="_blank"
        >
          <v-icon left>{{ icons.mdiFilePdf }}</v-icon>
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
import { mdiFilePdf } from '@mdi/js'
import { CVTimelineItems } from '~/data/CVData'
import CVTimelineItemDisplay from '~/components/cv/CVTimelineItemDisplay.vue'
import { CVItemType, CVTimelineItem } from '~/model/CVModel'
import { Optional } from '~/types/utilityTypes'
import CVItemsFilter from '~/components/cv/CVItemsFilter.vue'
import { CV_PDF_FILENAME } from '~/data/generated/cvPdf'
import { sortTimelineItems } from '~/utils/cvTimeline'

export default Vue.extend({
  components: { CVItemsFilter, CVTimelineItemDisplay },
  data() {
    return {
      reverseOrder: false,
      itemFilter: undefined as Optional<CVItemType>,
      icons: {
        mdiFilePdf
      }
    }
  },
  computed: {
    pdfHref(): string {
      return `/files/${CV_PDF_FILENAME}`
    },
    sortedItems(): CVTimelineItem[] {
      let items = CVTimelineItems.sort(sortTimelineItems).filter(
        (item: CVTimelineItem) => item.type !== CVItemType.COURSE
      )
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
