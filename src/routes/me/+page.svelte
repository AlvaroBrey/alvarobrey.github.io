<script lang="ts">
  import { whatIDo } from '$lib/data/MeData'
  import { m } from '$lib/paraglide/messages'
  import { pageLabel } from '$lib/utils/pages'
  import BasicPage from '$lib/components/BasicPage.svelte'
  import InfoBar from '$lib/components/InfoBar.svelte'
  import SeoHead from '$lib/components/SeoHead.svelte'
  import Card from '$lib/components/ui/Card.svelte'

  const lookingForContact = m.page_me_looking_for_contact({
    link: `<a href="/contact" class="underline">${m.page_me_contact_page()}</a>`
  })

  const title = pageLabel('/me')
</script>

<SeoHead {title} />

<!-- eslint-disable svelte/no-at-html-tags -- locale content, not user input -->
<BasicPage {title}>
  <Card class="mt-4">
    <div class="space-y-4 p-6 text-body">
      <p>{@html m.page_me_intro()}</p>
      <p>{@html m.page_me_automation()}</p>
      <p>{@html m.page_me_opensource()}</p>
      <p>{@html m.page_me_personal()}</p>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <p class="mb-0 text-sm tracking-wide text-primary uppercase">
            {m.page_me_what_ido()}
          </p>
          <ul class="list-disc pl-5">
            {#each whatIDo as item (item)}
              <li>{item}</li>
            {/each}
          </ul>
        </div>
        <div>
          <p class="mb-0 text-sm tracking-wide text-primary uppercase">
            {m.page_me_what_ilike()}
          </p>
          <ul class="list-disc pl-5">
            <li>{m.page_me_likes_automation()}</li>
            <li>{m.page_me_likes_clean_code()}</li>
            <li>{m.page_me_likes_open_source()}</li>
            <li>{m.page_me_likes_fp()}</li>
            <li>{m.page_me_likes_reproducible()}</li>
            <li>{m.page_me_likes_pair_programming()}</li>
          </ul>
        </div>
      </div>
    </div>
  </Card>
  <InfoBar class="mt-4">
    <span>{@html lookingForContact}</span>
  </InfoBar>
</BasicPage>
