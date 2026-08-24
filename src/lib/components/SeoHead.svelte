<script lang="ts">
  import { page } from '$app/state'

  interface Props {
    title: string
    noindex?: boolean
  }

  let { title, noindex = false }: Props = $props()

  // Strip the trailing slash that `trailingSlash: 'always'` adds, but keep it
  // on the root so the canonical URLs match what the site served before.
  const canonical = $derived(
    'https://alvarobrey.com' + page.url.pathname.replace(/(.)\/$/, '$1')
  )
</script>

<svelte:head>
  <title>{title} - Álvaro Brey</title>
  {#if noindex}
    <meta name="robots" content="noindex" />
  {:else}
    <link rel="canonical" href={canonical} />
  {/if}
</svelte:head>
