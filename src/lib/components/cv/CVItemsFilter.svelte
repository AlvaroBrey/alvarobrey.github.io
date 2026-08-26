<script lang="ts">
  import { mdiCheck } from '@mdi/js'
  import { CVItemType } from '../../model/CVModel'
  import {
    CVItemTypeColors,
    CVItemTypeLabels,
    cvLabels
  } from '../../model/CVUIModel'
  import type { Optional } from '../../types/utilityTypes'
  import Icon from '../ui/Icon.svelte'

  interface Props {
    value?: Optional<CVItemType>
  }

  let { value = $bindable(undefined) }: Props = $props()

  const CHIP =
    'flex items-center gap-1 rounded-full border px-3 py-1 text-sm transition-colors'

  function chipStyle(type: CVItemType, selected: boolean): string {
    const color = CVItemTypeColors[type]
    return `border-color: ${color}; background-color: ${
      selected ? color : 'transparent'
    }; color: ${selected ? 'white' : color}`
  }
</script>

<div class="flex flex-wrap gap-2">
  <button
    type="button"
    onclick={() => (value = undefined)}
    class="{CHIP} {value === undefined
      ? 'border-body bg-body text-background'
      : 'border-muted/40 text-body'}"
  >
    {#if value === undefined}<Icon path={mdiCheck} size={16} />{/if}
    {cvLabels.filterAll}
  </button>
  {#each Object.values(CVItemType) as type (type)}
    <button
      type="button"
      onclick={() => (value = type)}
      style={chipStyle(type, value === type)}
      class={CHIP}
    >
      {#if value === type}<Icon path={mdiCheck} size={16} />{/if}
      {CVItemTypeLabels[type]}
    </button>
  {/each}
</div>
