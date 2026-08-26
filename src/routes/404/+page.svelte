<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import NotFound from '$lib/components/NotFound.svelte'
</script>

<NotFound title={m.error_404_title()} description={m.error_404_description()} />
