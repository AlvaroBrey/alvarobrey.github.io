<script lang="ts">
  import { mdiMenu } from '@mdi/js'
  import { page } from '$app/state'
  import { isHome } from '../../utils/pages'
  import Icon from '../ui/Icon.svelte'
  import DarkModeToggle from './DarkModeToggle.svelte'
  import LocaleSelector from './LocaleSelector.svelte'
  import Nav from './Nav.svelte'

  interface Props {
    onToggleSidebar: () => void
  }

  let { onToggleSidebar }: Props = $props()

  const showNav = $derived(!isHome(page.url.pathname))
</script>

<header
  class="relative flex items-center bg-surface px-4 py-3 shadow-md md:shadow-none"
>
  {#if showNav}
    <button
      type="button"
      class="md:hidden"
      aria-label="Open menu"
      onclick={onToggleSidebar}
    >
      <Icon path={mdiMenu} size={28} />
    </button>
    <div class="hidden md:flex">
      <Nav />
    </div>
  {/if}
  <div
    class="right-controls absolute top-4 right-4 z-50 flex items-center gap-3"
  >
    <DarkModeToggle />
    <LocaleSelector />
  </div>
</header>
