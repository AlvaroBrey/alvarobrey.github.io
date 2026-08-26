<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { pageLabel } from '$lib/utils/pages'
  import { mdiEmail, mdiGithub, mdiLinkedin } from '@mdi/js'
  import BasicPage from '$lib/components/BasicPage.svelte'
  import SeoHead from '$lib/components/SeoHead.svelte'
  import ContactItem from '$lib/components/contact/ContactItem.svelte'
  import { contactLinks } from '$lib/data/ContactData'
  import type { ContactKey } from '$lib/data/ContactData'

  const icons: Record<ContactKey, string> = {
    linkedIn: mdiLinkedin,
    gitHub: mdiGithub,
    mail: mdiEmail
  }

  const items = contactLinks.map((it) => ({ ...it, icon: icons[it.key] }))

  const title = pageLabel('/contact')
</script>

<SeoHead {title} />

<BasicPage {title}>
  <p class="mt-4 text-body">{m.page_contact_intro()}</p>
  <div
    class="mt-6 flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-20"
  >
    {#each items as item (item.key)}
      <ContactItem icon={item.icon} label={item.label} link={item.link} />
    {/each}
  </div>
</BasicPage>
