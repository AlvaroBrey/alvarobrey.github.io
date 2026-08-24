<script lang="ts">
  import { page } from '$app/state'
  import { t } from '../../i18n'
  import { isAbout, pages } from '../../utils/pages'

  const navPages = pages.filter((p) => !isAbout(p.href))

  function isActive(href: string): boolean {
    return page.url.pathname === href || page.url.pathname === href + '/'
  }
</script>

<nav class="flex items-center gap-6">
  {#each navPages as p (p.href)}
    <a
      href={p.href}
      class="border-b-2 py-1 text-sm font-medium tracking-wide uppercase no-underline transition-colors {isActive(
        p.href
      )
        ? 'border-primary text-primary'
        : 'border-transparent text-muted hover:text-body'}"
    >
      {t(`nav.${p.translationKey}`)}
    </a>
  {/each}
</nav>
