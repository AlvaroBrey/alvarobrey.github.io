<template functional>
  <v-alert
    type="info"
    color="primary lighten-2"
    class="info-bar"
    :class="data.staticClass || ''"
    v-bind="data.attrs"
  >
    <slot />
  </v-alert>
</template>
