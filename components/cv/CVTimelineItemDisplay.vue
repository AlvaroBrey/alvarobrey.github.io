<template>
  <v-timeline-item :color="color" :large="isMobile" :fill-dot="isMobile">
    <template v-slot:icon>
      <v-avatar class="pa-2 hidden-sm-and-up" color="white">
        <v-img contain :src="imgPath" />
      </v-avatar>
    </template>
    <v-card elevation="0">
      <!-- eslint-disable vue/no-v-html -->
      <div
        class="d-flex flex-no-wrap justify-space-between flex-xs-row"
        :class="{ 'flex-lg-row-reverse': isLeft }"
      >
        <div>
          <v-card-title
            class="cv-card-title"
            v-text="$t(`page.cv.items.${item.key}.title`)"
          />
          <v-card-subtitle>
            <span>{{ $t(`page.cv.orgs.${item.org}`) }}</span>
            <span class="hidden-lg-and-up">
              <span class="mx-1">|</span>
              <span>{{ dateText }}</span>
            </span>
          </v-card-subtitle>
          <v-card-text
            v-html="$t(`page.cv.items.${item.key}.shortDescription`)"
          />
        </div>
        <v-avatar tile :size="imgSize" class="ma-3 hidden-xs-only">
          <v-img contain :src="imgPath" />
        </v-avatar>
      </div>
    </v-card>
    <template slot="opposite">
      <span class="text-body">{{ dateText }}</span>
    </template>
  </v-timeline-item>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import moment from 'moment'
import { CVTimelineItem } from '~/model/CVModel'
import { Optional } from '~/types/utilityTypes'
import { CV_DATE_FORMAT, CVItemTypeColors } from '~/model/ui/CVUIModel'

export default Vue.extend({
  name: 'CVTimelineItem',
  props: {
    item: {
      required: true,
      type: Object
    } as PropOptions<CVTimelineItem>,
    isLeft: {
      type: Boolean,
      default: false
    } as PropOptions<Boolean>
  },
  computed: {
    color(): string {
      return CVItemTypeColors[this.item.type]
    },
    formattedEndDate(): Optional<string> {
      return this.formatDate(this.item.endDate)
    },
    formattedStartDate(): Optional<string> {
      if (this.item.startDate) {
        return this.formatDate(this.item.startDate)
      }
      return undefined
    },
    imgSize(): number {
      if (this.$nuxt.$vuetify.breakpoint.lgAndUp) {
        return 150
      }
      return 80
    },
    imgPath(): string {
      return require(`~/assets/img/orgs/${this.item.org}.png`)
    },
    isMobile(): boolean {
      return this.$nuxt.$vuetify.breakpoint.xsOnly
    },
    dateText(): string | undefined {
      if (this.formattedStartDate) {
        return `${this.formattedStartDate} - ${this.formattedEndDate}`
      }
      return this.formattedEndDate
    }
  },
  methods: {
    formatDate(date: Optional<moment.Moment>): string {
      if (date === undefined) {
        return this.$tc('page.cv.present')
      }
      return date.format(CV_DATE_FORMAT)
    }
  }
})
</script>

<style lang="scss" scoped>
.cv-card-title {
  word-break: break-word;
}
</style>
