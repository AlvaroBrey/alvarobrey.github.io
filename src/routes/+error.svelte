<script lang="ts">
  import { page } from '$app/state'
  import BasicPage from '$lib/components/BasicPage.svelte'
  import SeoHead from '$lib/components/SeoHead.svelte'
  import Button from '$lib/components/ui/Button.svelte'
  import { t } from '$lib/i18n'

  const isNotFound = $derived(page.status === 404)
  const title = $derived(
    isNotFound ? t('error.404.title') : t('error.other.title')
  )
  const description = $derived(
    isNotFound ? t('error.404.description') : t('error.other.description')
  )
</script>

<SeoHead {title} />

<BasicPage {title}>
  <p class="mb-8 text-lg text-muted">{description}</p>
  <div class="flex items-center justify-center">
    <Button href="/">{t('nav.home')}</Button>
  </div>
</BasicPage>
