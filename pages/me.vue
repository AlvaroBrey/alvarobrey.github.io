<template>
  <BasicPage :title="$t('page.me.title')">
    <!-- eslint-disable vue/no-v-html -->
    <p class="body-1" v-html="$t('page.me.paragraph1')" />
    <p class="body-1" v-html="$t('page.me.paragraph2')" />
    <p class="body-1" v-html="$t('page.me.paragraph3')" />
    <p class="body-1" v-html="$t('page.me.paragraph4')" />
    <v-row justify="center" align="start">
      <v-col cols="12" xs="12" md="6">
        <p
          class="text-overline mb-0 primary--text"
          v-text="$t('page.me.whatIDo')"
        />
        <ul>
          <li>VueJS, Typescript, NuxtJS</li>
          <li>Docker, Kubernetes</li>
          <li>Git</li>
          <li>Kotlin</li>
          <li>Python, shell</li>
          <li>Ansible</li>
          <li>Android</li>
          <li>Linux</li>
        </ul>
      </v-col>
      <v-col cols="12" xs="12" md="6">
        <p
          class="text-overline mb-0 primary--text"
          v-text="$t('page.me.whatILike')"
        />
        <ul>
          <li v-text="$t('page.me.likes.automation')" />
          <li v-text="$t('page.me.likes.cleanCode')" />
          <li v-text="$t('page.me.likes.openSource')" />
          <li v-text="$t('page.me.likes.fp')" />
          <li v-text="$t('page.me.likes.reproducible')" />
          <li v-text="$t('page.me.likes.pairProgramming')" />
        </ul>
      </v-col>
    </v-row>
    <InfoBar class="mt-4">
      <i18n path="page.me.lookingForContact" tag="span">
        <nuxt-link
          :to="localePath({ name: 'contact' })"
          v-text="$t('page.me.contactPage')"
        />
      </i18n>
    </InfoBar>
  </BasicPage>
</template>

<script lang="ts">
import Vue from 'vue'
import InfoBar from '~/components/InfoBar.vue'
import BasicPage from '~/components/BasicPage.vue'

export default Vue.extend({
  components: { BasicPage, InfoBar },
  head() {
    return {
      title: this.$tc('nav.me')
    }
  }
})
</script>

<style lang="scss">
// easter egg
a.simon {
  color: inherit !important;
  text-decoration: inherit !important;
}
</style>
