<template>
  <v-row id="me" justify="center" align="center">
    <!-- eslint-disable vue/no-v-html -->
    <v-col cols="12" xs="12" sm="10" lg="8">
      <h4 class="text-h4 primary--text" v-text="$t('page.me.title')" />
      <p class="body-1" v-html="$t('page.me.paragraph1')" />
      <p class="body-1" v-html="$t('page.me.paragraph2')" />
      <p class="body-1" v-html="$t('page.me.paragraph3')" />
      <p class="body-1" v-html="$t('page.me.paragraph4')" />
      <v-row justify="center" align="start">
        <v-col cols="12" xs="12" md="6">
          <p
            class="overline mb-0 primary--text"
            v-text="$t('page.me.whatIDo')"
          />
          <ul>
            <li>VueJS, Typescript, NuxtJS</li>
            <li>Docker, Kubernetes</li>
            <li>Git</li>
            <li>Kotlin</li>
            <li>Android</li>
            <li>Python, shell</li>
            <li>Ansible</li>
            <li>Linux</li>
          </ul>
        </v-col>
        <v-col cols="12" xs="12" md="6">
          <p
            class="overline mb-0 primary--text"
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
      <v-alert type="info" color="primary lighten-1" class="mt-4">
        <i18n path="page.me.lookingForContact" tag="span">
          <nuxt-link
            :to="localePath({ name: 'contact' })"
            class="accent--text"
            v-text="$t('page.me.contactPage')"
          />
        </i18n>
      </v-alert>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
