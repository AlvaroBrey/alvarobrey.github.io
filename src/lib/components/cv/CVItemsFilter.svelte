<script lang="ts">
  import { mdiCheck } from '@mdi/js'
  import { CVItemType } from '../../model/CVModel'
  import { CVItemTypeColors } from '../../model/CVUIModel'
  import type { Optional } from '../../types/utilityTypes'
  import { t } from '../../i18n'
  import Icon from '../ui/Icon.svelte'

  interface Props {
    value?: Optional<CVItemType>
  }

  let { value = $bindable(undefined) }: Props = $props()

  const types = Object.values(CVItemType).filter(
    (type) => type !== CVItemType.COURSE
  )
</script>

<div class="flex flex-wrap gap-2">
  <button
    type="button"
    onclick={() => (value = undefined)}
    class="flex items-center gap-1 rounded-full border px-3 py-1 text-sm transition-colors {value ===
    undefined
      ? 'border-body bg-body text-background'
      : 'border-muted/40 text-body'}"
  >
    {#if value === undefined}<Icon path={mdiCheck} size={16} />{/if}
    {t('global.filter.all')}
  </button>
  {#each types as type (type)}
    <button
      type="button"
      onclick={() => (value = type)}
      style="border-color: {CVItemTypeColors[
        type
      ]}; background-color: {value === type
        ? CVItemTypeColors[type]
        : 'transparent'}; color: {value === type
        ? 'white'
        : CVItemTypeColors[type]}"
      class="flex items-center gap-1 rounded-full border px-3 py-1 text-sm transition-colors"
    >
      {#if value === type}<Icon path={mdiCheck} size={16} />{/if}
      {t(`page.cv.filter.${type}`)}
    </button>
  {/each}
</div>
