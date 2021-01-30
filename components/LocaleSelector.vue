<template>
  <v-menu v-model="menuOpen" offset-y>
    <template v-slot:activator="{ on }">
      <v-btn id="locale-btn" elevation="0" color="transparent" v-on="on">
        <span v-text="currentLocale.toUpperCase()"></span>
        <v-icon right :class="{ flipped: menuOpen }">
          {{ icons.mdiChevronDown }}
        </v-icon>
      </v-btn>
    </template>
    <v-list class="py-0">
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
import { mdiChevronDown } from '@mdi/js'
export default Vue.extend({
  name: 'LanguageSelector',
  data() {
    return {
      menuOpen: false,
      icons: {
        mdiChevronDown
      }
    }
  },
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

<style lang="scss" scoped>
.flipped {
  transform: rotate(-180deg);
}
</style>
