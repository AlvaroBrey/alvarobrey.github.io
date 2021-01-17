<template>
  <BasicPage :title="title">
    <p class="text-subtitle-2 mb-8">{{ description }}</p>
    <v-row align="center" justify="center">
      <v-btn v-row color="primary" :to="localeRoute({ name: 'home' })" nuxt>
        {{ $t('nav.home') }}
      </v-btn>
    </v-row>
  </BasicPage>
</template>

<script>
import BasicPage from '../components/BasicPage'

const ERROR_NOT_FOUND = 404
export default {
  components: { BasicPage },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    title() {
      if (this.error.statusCode === ERROR_NOT_FOUND) {
        return this.$tc('error.404.title')
      } else {
        return this.$tc('error.other.title')
      }
    },
    description() {
      if (this.error.statusCode === ERROR_NOT_FOUND) {
        return this.$tc('error.404.description')
      } else {
        return this.$tc('error.other.description')
      }
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
