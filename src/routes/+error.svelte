<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { page } from '$app/state'
  import NotFound from '$lib/components/NotFound.svelte'

  const notFound = $derived(page.status === 404)
</script>

{#if notFound}
  <NotFound
    title={m.error_404_title()}
    description={m.error_404_description()}
  />
{:else}
  <NotFound
    title={m.error_other_title()}
    description={m.error_other_description()}
  />
{/if}
