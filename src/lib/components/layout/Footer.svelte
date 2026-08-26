<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { secondaryPages } from '../../utils/pages'
</script>

<footer class="mx-auto max-w-6xl px-4 pb-8 text-sm text-muted">
  <div
    class="flex flex-col items-center gap-3 border-t border-muted/20 pt-6 sm:flex-row sm:justify-between"
  >
    <nav class="flex gap-4" aria-label={m.aria_secondary_nav()}>
      {#each secondaryPages as p (p.href)}
        <a href={p.href}>{p.label}</a>
      {/each}
    </nav>
    <!-- eslint-disable-next-line svelte/no-at-html-tags -- locale content, not user input -->
    <p>{@html m.footer_source()}</p>
  </div>
</footer>
