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

<style lang="scss">
@import 'assets/global.scss';
</style>
<script>
import SidebarNav from '../components/SidebarNav'
import Header from '~/components/Header'
export default {
  components: { SidebarNav, Header },
  data() {
    return {
      sidebarOpen: false
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    }
  }
}
</script>
