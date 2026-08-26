<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import BasicPage from '$lib/components/BasicPage.svelte'
  import SeoHead from '$lib/components/SeoHead.svelte'
  import Button from '$lib/components/ui/Button.svelte'
  import Card from '$lib/components/ui/Card.svelte'
  import { isHome, navPages, pageLabel } from '$lib/utils/pages'

  const filteredPages = navPages.filter((p) => !isHome(p.href))
</script>

<SeoHead title={pageLabel('/')} />

<!-- eslint-disable svelte/no-at-html-tags -- locale content, not user input -->
<BasicPage>
  {#snippet titleContent()}
    <h1 class="my-12 text-center text-6xl text-primary">
      {m.page_index_greeting()}
    </h1>
  {/snippet}
  <Card>
    <div class="p-6">
      <div class="space-y-4 text-body">
        <p>{@html m.page_index_introduction()}</p>
        <p>{@html m.page_index_interests()}</p>
      </div>
      <div
        class="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row"
      >
        {#each filteredPages as p (p.href)}
          <Button href={p.href}>{p.label}</Button>
        {/each}
      </div>
    </div>
  </Card>
</BasicPage>
