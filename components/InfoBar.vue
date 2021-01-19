<template>
  <v-alert type="info" color="primary" class="info-bar">
    <slot />
  </v-alert>
</template>

<style lang="scss">
.info-bar a {
  color: inherit !important;
}
</style>
