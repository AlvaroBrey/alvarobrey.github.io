<script lang="ts">
  import { page } from '$app/state'
  import NotFound from '$lib/components/NotFound.svelte'
  import { t } from '$lib/i18n'

  const kind = $derived(page.status === 404 ? '404' : 'other')
</script>

<NotFound
  title={t(`error.${kind}.title`)}
  description={t(`error.${kind}.description`)}
/>
