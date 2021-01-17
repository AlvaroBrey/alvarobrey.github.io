<template>
  <v-navigation-drawer v-model="isOpen" app temporary>
    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        nuxt
        :to="localePath({ name: item.routeName })"
      >
        <v-list-item-content>
          <v-list-item-title>
            {{ $t(`nav.${item.translationKey}`) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Page, pages } from '~/utils/pages'

export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      default: false
    } as PropOptions<boolean>
  },
  computed: {
    isOpen: {
      get(): boolean {
        return this.value
      },
      set(value: boolean) {
        this.$emit('input', value)
      }
    },
    items(): Page[] {
      return pages
    }
  }
})
</script>
