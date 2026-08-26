<script lang="ts">
  import { page } from '$app/state'
  import { isAbout, isActive, pages } from '../../utils/pages'

  const navPages = pages.filter((p) => !isAbout(p.href))
</script>

<nav class="flex items-center gap-6">
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
