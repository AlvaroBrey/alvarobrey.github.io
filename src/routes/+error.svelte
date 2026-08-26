<script lang="ts">
  import { page } from '$app/state'
  import NotFound from '$lib/components/NotFound.svelte'
  import { t } from '$lib/i18n'

  const notFound = $derived(page.status === 404)
</script>

{#if notFound}
  <NotFound
    title={t('error.404.title')}
    description={t('error.404.description')}
  />
{:else}
  <NotFound
    title={t('error.other.title')}
    description={t('error.other.description')}
  />
{/if}
