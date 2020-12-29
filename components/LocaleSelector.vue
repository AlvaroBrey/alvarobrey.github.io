<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-btn elevation="0" color="background" v-on="on">
        {{ currentLocale.toUpperCase() }}
        <v-icon right>mdi-chevron-down</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="locale in availableLocales"
        :key="locale"
        @click="switchLocale(locale)"
      >
        <v-list-item-title v-text="locale.toUpperCase()" />
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LanguageSelector',
  computed: {
    availableLocales(): string[] {
      return this.$i18n.availableLocales
    },
    currentLocale(): string {
      return this.$i18n.locale
    }
  },
  methods: {
    switchLocale(locale: string) {
      this.$router.push(this.switchLocalePath(locale))
    }
  }
})
</script>
