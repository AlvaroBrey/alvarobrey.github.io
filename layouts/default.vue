<template>
  <v-app class="app">
    <Header />
    <v-main class="text-body-1">
      <v-container>
        <v-alert type="warning">
          {{ $t('global.wip') }}
        </v-alert>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss">
@import 'assets/global.scss';
</style>
<script>
import Header from '~/components/Header'
export default {
  components: { Header }
}
</script>
