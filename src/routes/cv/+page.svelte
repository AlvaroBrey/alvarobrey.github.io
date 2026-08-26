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
  import type { CVItemType } from '$lib/model/CVModel'
  import type { Optional } from '$lib/types/utilityTypes'
  import { sortTimelineItems } from '$lib/utils/cvTimeline'

  const sortedItems = [...CVTimelineItems].sort(sortTimelineItems)

  const pdfHref = `/files/${CV_PDF_FILENAME}`

  let filter = $state<Optional<CVItemType>>(undefined)

  const shownItems = $derived(
    filter === undefined
      ? sortedItems
      : sortedItems.filter((item) => item.type === filter)
  )

  const title = pageLabel('/cv')
</script>

<SeoHead {title} />

<BasicPage>
  {#snippet titleContent()}
    <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
      <!-- eslint-disable-next-line svelte/no-at-html-tags -- locale content, not user input -->
      <h1 class="text-4xl text-primary">{title}</h1>
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
