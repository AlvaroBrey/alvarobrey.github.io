<script lang="ts">
  import { mdiFilePdfBox } from '@mdi/js'
  import CVItemsFilter from '$lib/components/cv/CVItemsFilter.svelte'
  import CVTimeline from '$lib/components/cv/CVTimeline.svelte'
  import SeoHead from '$lib/components/SeoHead.svelte'
  import Icon from '$lib/components/ui/Icon.svelte'
  import { CVTimelineItems } from '$lib/data/CVData'
  import { CV_PDF_FILENAME } from '$lib/generated/cvPdf'
  import { t } from '$lib/i18n'
  import { CVItemType } from '$lib/model/CVModel'
  import type { Optional } from '$lib/types/utilityTypes'
  import { sortTimelineItems } from '$lib/utils/cvTimeline'

  let filter = $state<Optional<CVItemType>>(undefined)

  const pdfHref = `/files/${CV_PDF_FILENAME}`

  const sortedItems = $derived(
    [...CVTimelineItems]
      .sort(sortTimelineItems)
      .filter((item) => item.type !== CVItemType.COURSE)
      .filter((item) => filter === undefined || item.type === filter)
  )
</script>

<SeoHead title={t('nav.cv')} />

<div class="mx-auto w-full sm:w-10/12 lg:w-8/12">
  <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
    <!-- eslint-disable-next-line svelte/no-at-html-tags -- locale content, not user input -->
    <h1 class="text-4xl text-primary">{@html t('page.cv.title')}</h1>
    <a
      href={pdfHref}
      target="_blank"
      class="inline-flex items-center gap-2 rounded bg-primary px-4 py-2 text-sm font-medium text-on-primary uppercase no-underline hover:opacity-90"
    >
      <Icon path={mdiFilePdfBox} size={20} />
      PDF version
    </a>
  </div>

  <div class="mb-8">
    <CVItemsFilter bind:value={filter} />
  </div>

  <CVTimeline items={sortedItems} />
</div>
