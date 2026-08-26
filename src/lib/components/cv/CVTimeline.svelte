<script lang="ts">
  import type { CVTimelineItem as CVTimelineItemType } from '../../model/CVModel'
  import CVTimelineItem from './CVTimelineItem.svelte'

  interface Props {
    items: CVTimelineItemType[]
  }

  let { items }: Props = $props()
</script>

<div class="relative">
  <div class="absolute top-0 bottom-0 left-4 w-px bg-muted/20"></div>
  <div class="flex flex-col gap-8">
    {#each items as item (item.key)}
      <CVTimelineItem {item} />
    {/each}
  </div>
</div>
