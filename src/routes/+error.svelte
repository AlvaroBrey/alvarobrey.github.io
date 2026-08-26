<script lang="ts">
  import { page } from '$app/state'
  import { m } from '$lib/paraglide/messages'
  import NotFound from '$lib/components/NotFound.svelte'

  const notFound = $derived(page.status === 404)
  const title = $derived(notFound ? m.error_404_title() : m.error_other_title())
  const description = $derived(
    notFound ? m.error_404_description() : m.error_other_description()
  )
</script>

<NotFound {title} {description} />
