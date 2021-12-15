<template>
  <BasicPage :title="$t('page.contact.title')">
    <p class="text-body-1">
      {{ $t('page.contact.intro') }}
    </p>
    <v-row justify="center" align="center">
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
import { mdiEmail, mdiGithub, mdiLinkedin, mdiTwitter } from '@mdi/js'
import BasicPage from '~/components/BasicPage.vue'
import ContactItemDisplay from '~/components/contact/ContactItemDisplay.vue'

interface ContactItem {
  key: string
  icon: string
  link: string
}

const items: ContactItem[] = [
  {
    key: 'linkedIn',
    icon: mdiLinkedin,
    link: 'https://linkedin.com/in/alvarobrey'
  },
  {
    key: 'gitHub',
    icon: mdiGithub,
    link: 'https://github.com/alvarobrey'
  },
  {
    key: 'twitter',
    icon: mdiTwitter,
    link: 'https://twitter.com/AlvaroBrey_'
  },
  {
    key: 'mail',
    icon: mdiEmail,
    link: 'mailto:alvaro@alvarobrey.com'
  }
]

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
