<template>
  <v-timeline-item :color="color">
    <v-card>
      <v-card-title
        class="cv-card-title"
        v-text="$t(`page.cv.items.${item.translationKey}.title`)"
      />
      <v-card-subtitle
        v-text="$t(`page.cv.orgs.${item.organizationTranslationKey}`)"
      />
    </v-card>
    <template slot="opposite">
      <span v-if="item.startDate">{{ formattedStartDate }} - </span>
      <span>{{ formattedEndDate }}</span>
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
    } as PropOptions<CVTimelineItem>
  },
  computed: {
    color(): string {
      return CVItemTypeColors[this.item.type]
    },
    formattedEndDate(): Optional<string> {
      return this.formatDate(this.item.endDate)
    },
    formattedStartDate(): Optional<string> {
      return this.formatDate(this.item.startDate)
    }
  },
  methods: {
    formatDate(date: Optional<moment.Moment>) {
      if (date === undefined) {
        return this.$t('page.cv.present')
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
