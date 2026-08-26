<script lang="ts">
  import { page } from '$app/state'
  import { canonicalUrl } from '../utils/urls'

  interface Props {
    title: string
    noindex?: boolean
  }

  let { title, noindex = false }: Props = $props()

  const canonical = $derived(canonicalUrl(page.url.pathname))
</script>

<svelte:head>
  <title>{title} - Álvaro Brey</title>
  {#if noindex}
    <meta name="robots" content="noindex" />
  {:else}
    <link rel="canonical" href={canonical} />
  {/if}
</svelte:head>
