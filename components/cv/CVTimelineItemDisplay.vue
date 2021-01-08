<template>
  <v-timeline-item>
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
      <span v-if="item.startDate">{{ formatDate(item.startDate) }} - </span>
      <span>{{ formatDate(item.endDate) }}</span>
    </template>
  </v-timeline-item>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { CVTimelineItem } from '~/model/CVModel'

export default Vue.extend({
  name: 'CVTimelineItem',
  props: {
    item: {
      required: true,
      type: Object
    } as PropOptions<CVTimelineItem>
  },
  methods: {
    formatDate(date: moment.Moment | undefined) {
      if (date === undefined) {
        return this.$t('page.cv.present')
      }
      return date.format('YYYY/MM')
    }
  }
})
</script>

<style lang="scss" scoped>
.cv-card-title {
  word-break: break-word;
}
</style>
