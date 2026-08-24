<script lang="ts">
  import { mdiEmail, mdiGithub, mdiLinkedin } from '@mdi/js'
  import BasicPage from '$lib/components/BasicPage.svelte'
  import SeoHead from '$lib/components/SeoHead.svelte'
  import ContactItem from '$lib/components/contact/ContactItem.svelte'
  import { t } from '$lib/i18n'
  import { contactLinks } from '$lib/data/ContactData'

  const icons: Record<string, string> = {
    linkedIn: mdiLinkedin,
    gitHub: mdiGithub,
    mail: mdiEmail
  }

  const items = contactLinks.map((it) => ({ ...it, icon: icons[it.key] }))
</script>

<SeoHead title={t('nav.contact')} />

<BasicPage title={t('page.contact.title')}>
  <div class="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
    {#each items as item (item.key)}
      <ContactItem
        icon={item.icon}
        translationKey={item.key}
        link={item.link}
      />
    {/each}
  </div>
</BasicPage>
