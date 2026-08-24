<script lang="ts">
  import { page } from '$app/state'

  interface Props {
    title: string
  }

  let { title }: Props = $props()

  const canonical = $derived(
    'https://alvarobrey.com' +
      (page.url.pathname === '/' ? '' : page.url.pathname.replace(/\/$/, ''))
  )
</script>

<svelte:head>
  <title>{title} - Álvaro Brey</title>
  <link rel="canonical" href={canonical} />
</svelte:head>
