<template>
  <v-row justify="center" align="center">
    <v-col cols="12" xs="12" sm="10" lg="8">
      <slot name="title">
        <h4 v-if="title" class="text-h4 primary--text" v-text="title" />
      </slot>
      <slot />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: undefined
    } as PropOptions<string>
  }
})
</script>
