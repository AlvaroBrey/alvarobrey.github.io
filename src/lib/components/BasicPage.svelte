<script lang="ts">
  import type { Snippet } from 'svelte'

  interface Props {
    title?: string
    titleContent?: Snippet
    children: Snippet
  }

  let { title, titleContent, children }: Props = $props()
</script>

<div class="mx-auto w-full sm:w-10/12 lg:w-8/12">
  {#if titleContent}
    {@render titleContent()}
  {:else if title}
    <h1 class="text-4xl text-primary">{title}</h1>
  {/if}
  {@render children()}
</div>
