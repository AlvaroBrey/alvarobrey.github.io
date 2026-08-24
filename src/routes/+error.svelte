<script lang="ts">
  import { page } from '$app/state'
  import NotFound from '$lib/components/NotFound.svelte'
  import { t } from '$lib/i18n'

  const isNotFound = $derived(page.status === 404)
  const title = $derived(
    isNotFound ? t('error.404.title') : t('error.other.title')
  )
  const description = $derived(
    isNotFound ? t('error.404.description') : t('error.other.description')
  )
</script>

<NotFound {title} {description} />
