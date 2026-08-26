<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { pageLabel } from '$lib/utils/pages'
  import BasicPage from '$lib/components/BasicPage.svelte'
  import SeoHead from '$lib/components/SeoHead.svelte'
  import Card from '$lib/components/ui/Card.svelte'

  const title = pageLabel('/privacy')

  const sections = [
    { heading: m.page_privacy_storage_title(), body: m.page_privacy_storage() },
    {
      heading: m.page_privacy_analytics_title(),
      body: m.page_privacy_analytics()
    },
    { heading: m.page_privacy_hosting_title(), body: m.page_privacy_hosting() },
    { heading: m.page_privacy_links_title(), body: m.page_privacy_links() },
    {
      heading: m.page_privacy_questions_title(),
      body: m.page_privacy_questions()
    }
  ]
</script>

<SeoHead {title} />

<!-- eslint-disable svelte/no-at-html-tags -- locale content, not user input -->
<BasicPage {title}>
  <Card class="mt-4">
    <div class="space-y-6 p-6 text-body">
      <p>{m.page_privacy_intro()}</p>
      {#each sections as section (section.heading)}
        <section>
          <h2 class="mb-1 text-xl text-primary">{section.heading}</h2>
          <p>{@html section.body}</p>
        </section>
      {/each}
    </div>
  </Card>
</BasicPage>
