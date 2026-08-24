<script lang="ts">
  import type { Snippet } from 'svelte'

  interface Props {
    class?: string
    children: Snippet
  }

  let { class: className = '', children }: Props = $props()
</script>

<div class="rounded bg-surface shadow {className}">
  {@render children()}
</div>
