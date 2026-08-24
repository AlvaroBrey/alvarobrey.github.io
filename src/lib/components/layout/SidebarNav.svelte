<script lang="ts">
  import { fly } from 'svelte/transition'
  import { page } from '$app/state'
  import { t } from '../../i18n'
  import { pages } from '../../utils/pages'

  interface Props {
    open?: boolean
  }

  let { open = $bindable(false) }: Props = $props()

  function isActive(href: string): boolean {
    return page.url.pathname === href || page.url.pathname === href + '/'
  }

  function close() {
    open = false
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') close()
  }

  $effect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  })
</script>

<svelte:window onkeydown={open ? handleKeydown : undefined} />

{#if open}
  <button
    type="button"
    class="fixed inset-0 z-40 bg-black/50"
    aria-label="Close menu"
    onclick={close}
  ></button>
  <nav
    transition:fly={{ x: -280, duration: 200 }}
    class="fixed inset-y-0 left-0 z-50 w-72 bg-surface shadow-lg"
  >
    <div class="border-b border-muted/20 p-4 text-lg font-medium text-primary">
      Álvaro Brey
    </div>
    <ul class="py-2">
      {#each pages as p (p.href)}
        <li>
          <a
            href={p.href}
            onclick={close}
            class="block px-4 py-2 text-sm no-underline hover:bg-primary/10 {isActive(
              p.href
            )
              ? 'bg-muted/15 font-medium'
              : ''}"
          >
            {t(`nav.${p.translationKey}`)}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
{/if}
