<template>
  <v-col cols="12" xs="12" sm="6" lg="3" align="center" justify="center">
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-hover v-slot="{ hover }">
          <a
            v-ripple
            :href="link"
            target="_blank"
            style="display: block"
            v-on="on"
          >
            <v-icon size="120" :color="hover ? 'primary' : ''">
              {{ icon }}
            </v-icon>
            <p class="text-subtitle-1">
              {{ $t(`page.contact.item.${translationKey}`) }}
            </p>
          </a>
        </v-hover>
      </template>
      <span>{{ formattedTooltip }}</span>
    </v-tooltip>
  </v-col>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  props: {
    icon: {
      type: String,
      required: true
    } as PropOptions<string>,
    translationKey: {
      type: String,
      required: true
    } as PropOptions<string>,
    link: {
      type: String,
      required: true
    } as PropOptions<string>
  },
  computed: {
    formattedTooltip(): string {
      return this.link.replace('https://', '').replace('mailto:', '')
    }
  }
})
</script>

<style scoped lang="scss">
a {
  outline: none;
  &::-moz-focus-inner {
    border: 0;
  }
}
</style>
