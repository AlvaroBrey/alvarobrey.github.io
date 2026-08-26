<script lang="ts">
  import { page } from '$app/state'
  import { m } from '$lib/paraglide/messages'
  import { isActive, navPages } from '../../utils/pages'
</script>

<nav class="flex items-center gap-6" aria-label={m.aria_main_nav()}>
  {#each navPages as p (p.href)}
    <a
      href={p.href}
      class="border-b-2 py-1 text-sm font-medium tracking-wide uppercase transition-colors {isActive(
        page.url.pathname,
        p.href
      )
        ? 'border-primary text-primary'
        : 'border-transparent text-muted hover:text-body'}"
    >
      {p.label}
    </a>
  {/each}
</nav>
