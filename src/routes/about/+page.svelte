<script lang="ts">
  import { pageLabel } from '$lib/utils/pages'
  import BasicPage from '$lib/components/BasicPage.svelte'
  import SeoHead from '$lib/components/SeoHead.svelte'
  import { t } from '$lib/i18n'
</script>

<SeoHead title={pageLabel('/about')} />

<!-- eslint-disable svelte/no-at-html-tags -- locale content, not user input -->
<BasicPage title={t('page.about.title')}>
  <p class="mt-2">{@html t('page.about.paragraph1')}</p>
  <p class="mt-3">{@html t('page.about.paragraph2')}</p>
</BasicPage>
