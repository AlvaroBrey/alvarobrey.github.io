<template>
  <v-chip-group v-model="selection" column mandatory>
    <v-chip filter>
      {{ $t('global.filter.all') }}
    </v-chip>
    <v-chip
      v-for="type in typesAndColors"
      :key="type.type"
      text-color="white"
      filter
      :color="type.colorClass"
    >
      {{ $t(`page.cv.filter.${type.type}`) }}
    </v-chip>
  </v-chip-group>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { CVItemType } from '~/model/CVModel'
import { Optional } from '~/types/utilityTypes'
import { CVItemTypeColors } from '~/model/ui/CVUIModel'

interface TypeAndColor {
  type: CVItemType
  colorClass: string
}

export default Vue.extend({
  name: 'CVItemsFilter',
  props: {
    value: {
      type: String,
      default: undefined
    } as PropOptions<Optional<CVItemType>>
  },
  data() {
    return {
      selection: 0
    }
  },
  computed: {
    typesAndColors(): TypeAndColor[] {
      return Object.values(CVItemType)
        .filter((type) => type !== CVItemType.COURSE)
        .map((type) => ({
          type,
          colorClass: CVItemTypeColors[type]
        }))
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val: Optional<CVItemType>) {
        if (val === undefined) {
          this.selection = 0
        } else {
          const typeIndex = this.typesAndColors.findIndex(
            (type) => type.type === val
          )
          this.selection = typeIndex + 1
        }
      }
    },
    selection(val: number) {
      if (val === 0) {
        this.$emit('input', undefined)
      } else {
        const type = this.typesAndColors[val - 1].type
        this.$emit('input', type)
      }
    }
  }
})
</script>
