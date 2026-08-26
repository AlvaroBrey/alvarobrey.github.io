<script lang="ts">
  import { pageLabel } from '$lib/utils/pages'
  import { mdiFilePdfBox } from '@mdi/js'
  import BasicPage from '$lib/components/BasicPage.svelte'
  import CVItemsFilter from '$lib/components/cv/CVItemsFilter.svelte'
  import CVTimeline from '$lib/components/cv/CVTimeline.svelte'
  import SeoHead from '$lib/components/SeoHead.svelte'
  import Button from '$lib/components/ui/Button.svelte'
  import Icon from '$lib/components/ui/Icon.svelte'
  import { CVTimelineItems } from '$lib/data/CVData'
  import { CV_PDF_FILENAME } from '$lib/generated/cvPdf'
  import { t } from '$lib/i18n'
  import type { CVItemType } from '$lib/model/CVModel'
  import { visibleCVItemTypes } from '$lib/model/CVUIModel'
  import type { Optional } from '$lib/types/utilityTypes'
  import { sortTimelineItems } from '$lib/utils/cvTimeline'

  // Order never depends on the filter, so sort once at module scope.
  const visibleItems = [...CVTimelineItems]
    .sort(sortTimelineItems)
    .filter((item) => visibleCVItemTypes.includes(item.type))

  const pdfHref = `/files/${CV_PDF_FILENAME}`

  let filter = $state<Optional<CVItemType>>(undefined)

  const shownItems = $derived(
    filter === undefined
      ? visibleItems
      : visibleItems.filter((item) => item.type === filter)
  )
</script>

<SeoHead title={pageLabel('/cv')} />

<BasicPage>
  {#snippet titleContent()}
    <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
      <!-- eslint-disable-next-line svelte/no-at-html-tags -- locale content, not user input -->
      <h1 class="text-4xl text-primary">{@html t('page.cv.title')}</h1>
      <Button href={pdfHref} target="_blank">
        <Icon path={mdiFilePdfBox} size={20} />
        PDF version
      </Button>
    </div>
  {/snippet}

  <div class="mb-8">
    <CVItemsFilter bind:value={filter} />
  </div>

  <CVTimeline items={shownItems} />
</BasicPage>
