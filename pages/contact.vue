<template>
  <BasicPage :title="$t('page.contact.title')">
    <v-row justify="center" align="center" class="mt-6">
      <ContactItemDisplay
        v-for="item in items"
        :key="item.key"
        :translation-key="item.key"
        :link="item.link"
        :icon="item.icon"
      />
    </v-row>
  </BasicPage>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiEmail, mdiGithub, mdiLinkedin } from '@mdi/js'
import BasicPage from '~/components/BasicPage.vue'
import ContactItemDisplay from '~/components/contact/ContactItemDisplay.vue'
import { contactLinks } from '~/data/ContactData'

const icons: Record<string, string> = {
  linkedIn: mdiLinkedin,
  gitHub: mdiGithub,
  mail: mdiEmail
}

const items = contactLinks.map((it) => ({ ...it, icon: icons[it.key] }))

export default Vue.extend({
  components: { ContactItemDisplay, BasicPage },
  data() {
    return {
      items
    }
  },
  head() {
    return {
      title: this.$tc('nav.contact')
    }
  }
})
</script>
