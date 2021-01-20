<template>
  <v-app class="app">
    <Header @toggle-sidebar="toggleSidebar" />
    <SidebarNav v-model="sidebarOpen" />
    <v-main class="text-body-1">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SidebarNav from '../components/SidebarNav'
import { getDefaultDarkValue } from '../utils/darkTheme.js'
import Header from '~/components/Header'
export default {
  components: { SidebarNav, Header },
  data() {
    return {
      sidebarOpen: false
    }
  },
  mounted() {
    // need to wait 2 ticks for vuetify to be ready ¯\_(ツ)_/¯
    this.$nextTick(() => {
      this.$nextTick(() => {
        this.$vuetify.theme.dark = getDefaultDarkValue()
      })
    })
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    }
  }
}
</script>
