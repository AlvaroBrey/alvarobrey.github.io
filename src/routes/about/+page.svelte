<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { pageLabel } from '$lib/utils/pages'

  const title = pageLabel('/about')
  import BasicPage from '$lib/components/BasicPage.svelte'
  import SeoHead from '$lib/components/SeoHead.svelte'
</script>

<SeoHead {title} />

<!-- eslint-disable svelte/no-at-html-tags -- locale content, not user input -->
<BasicPage {title}>
  <p class="mt-2">{@html m.page_about_paragraph1()}</p>
  <p class="mt-3">{@html m.page_about_paragraph2()}</p>
</BasicPage>
