<template>
  <v-timeline-item :color="color" :large="isMobile" :fill-dot="isMobile">
    <template v-slot:icon>
      <v-avatar v-if="hasOrg" class="pa-2 hidden-sm-and-up" color="white">
        <v-img contain :src="imgPath" />
      </v-avatar>
    </template>
    <v-card elevation="1">
      <!-- eslint-disable vue/no-v-html -->
      <div
        class="d-flex flex-no-wrap justify-space-between flex-xs-row"
        :class="{ 'flex-lg-row-reverse': isLeft }"
      >
        <div>
          <v-card-title
            class="cv-card-title primary--text"
            v-text="$t(`page.cv.items.${item.key}.title`)"
          />
          <v-card-subtitle>
            <span v-if="hasOrg">{{ $t(`page.cv.orgs.${item.org}`) }}</span>
            <span class="hidden-lg-and-up">
              <span class="mx-1">|</span>
              <span>{{ dateText }}</span>
            </span>
          </v-card-subtitle>
          <v-card-text>
            <p v-if="description" v-html="description" />
            <CvSkillsAndTechDisplay
              v-if="item.skills || item.tech"
              :skills="item.skills"
              :tech="item.tech"
            />
          </v-card-text>
        </div>
        <v-avatar
          v-if="hasOrg"
          tile
          :size="imgSize"
          class="ma-3 hidden-xs-only"
        >
          <v-img contain :src="imgPath" />
        </v-avatar>
      </div>
    </v-card>
    <template slot="opposite">
      <span class="text-overline">{{ dateText }}</span>
    </template>
  </v-timeline-item>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { format } from 'date-fns'
import { CVTimelineItem } from '~/model/CVModel'
import { Optional } from '~/types/utilityTypes'
import { CV_DATE_FORMAT, CVItemTypeColors } from '~/model/ui/CVUIModel'
import CvSkillsAndTechDisplay from '~/components/cv/CvSkillsAndTechDisplay.vue'

export default Vue.extend({
  name: 'CVTimelineItem',
  components: { CvSkillsAndTechDisplay },
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
    imgPath(): Optional<string> {
      if (this.hasOrg) {
        return require(`~/assets/img/orgs/${this.item.org}.png`)
      }
      return undefined
    },
    isMobile(): boolean {
      return this.$nuxt.$vuetify.breakpoint.xsOnly
    },
    dateText(): string | undefined {
      if (this.formattedStartDate) {
        return `${this.formattedStartDate} - ${this.formattedEndDate}`
      }
      return this.formattedEndDate
    },
    hasOrg(): boolean {
      return this.item.org !== undefined
    },
    description(): string {
      return this.$tc(`page.cv.items.${this.item.key}.shortDescription`)
    }
  },
  methods: {
    formatDate(date: Optional<Date>): string {
      if (date === undefined) {
        return this.$tc('page.cv.present')
      }
      return format(date, CV_DATE_FORMAT)
    }
  }
})
</script>

<style lang="scss" scoped>
.cv-card-title {
  word-break: break-word;
}
</style>
