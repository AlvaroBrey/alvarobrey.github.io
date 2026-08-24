<script lang="ts">
  import { mdiChevronDown } from '@mdi/js'
  import { availableLocales, defaultLocale } from '../../i18n'
  import Icon from '../ui/Icon.svelte'

  let open = $state(false)

  function handleOutsideClick(event: MouseEvent) {
    if (!(event.target as HTMLElement).closest('.locale-selector')) {
      open = false
    }
  }
</script>

<svelte:window onclick={open ? handleOutsideClick : undefined} />

{#if availableLocales.length > 1}
  <div class="locale-selector relative">
    <button
      type="button"
      onclick={() => (open = !open)}
      class="flex items-center gap-1 rounded px-2 py-1 text-sm font-medium"
    >
      <span>{defaultLocale.toUpperCase()}</span>
      <Icon
        path={mdiChevronDown}
        size={18}
        class="transition-transform {open ? '-rotate-180' : ''}"
      />
    </button>
    {#if open}
      <ul
        class="absolute right-0 z-10 mt-1 min-w-24 rounded bg-surface py-1 shadow"
      >
        {#each availableLocales as locale (locale)}
          <li>
            <button
              type="button"
              class="block w-full px-4 py-1 text-left text-sm hover:bg-primary/10"
              onclick={() => (open = false)}
            >
              {locale.toUpperCase()}
            </button>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
{/if}
