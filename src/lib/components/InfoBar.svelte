<script lang="ts">
  import { mdiInformation } from '@mdi/js'
  import Icon from './ui/Icon.svelte'
  import type { Snippet } from 'svelte'

  interface Props {
    class?: string
    children: Snippet
  }

  let { class: className = '', children }: Props = $props()
</script>

<div
  class="flex items-start gap-3 rounded bg-primary p-4 text-white [&_a]:text-inherit {className}"
>
  <Icon path={mdiInformation} class="shrink-0" />
  <div>
    {@render children()}
  </div>
</div>
