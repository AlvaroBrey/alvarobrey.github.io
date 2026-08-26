<script lang="ts">
  import BasicPage from '$lib/components/BasicPage.svelte'
  import SeoHead from '$lib/components/SeoHead.svelte'
  import Button from '$lib/components/ui/Button.svelte'
  import Card from '$lib/components/ui/Card.svelte'
  import { t } from '$lib/i18n'
  import { isAbout, isHome, pages } from '$lib/utils/pages'

  const filteredPages = pages.filter((p) => !isHome(p.href) && !isAbout(p.href))
</script>

<SeoHead title={t('nav.home')} />

<!-- eslint-disable svelte/no-at-html-tags -- locale content, not user input -->
<BasicPage>
  {#snippet titleContent()}
    <h1 class="my-12 text-center text-6xl text-primary">
      {@html t('page.index.greeting')}
    </h1>
  {/snippet}
  <Card>
    <div class="p-6">
      <div class="space-y-4 text-body">
        <p>{@html t('page.index.introduction')}</p>
        <p>{@html t('page.index.interests')}</p>
      </div>
      <div
        class="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row"
      >
        {#each filteredPages as p (p.href)}
          <Button href={p.href}>{t(`nav.${p.translationKey}`)}</Button>
        {/each}
      </div>
    </div>
  </Card>
</BasicPage>
