<script lang="ts">
  import { mdiMenu } from '@mdi/js'
  import { page } from '$app/state'
  import { m } from '$lib/paraglide/messages'
  import { isHome } from '../../utils/pages'
  import Icon from '../ui/Icon.svelte'
  import DarkModeToggle from './DarkModeToggle.svelte'
  import Nav from './Nav.svelte'

  interface Props {
    onToggleSidebar: () => void
  }

  let { onToggleSidebar }: Props = $props()

  const showNav = $derived(!isHome(page.url.pathname))
</script>

<header
  class="relative flex h-16 items-center justify-center bg-background px-4 shadow-md md:shadow-none"
>
  {#if showNav}
    <button
      type="button"
      class="absolute left-4 md:hidden"
      aria-label={m.aria_open_menu()}
      onclick={onToggleSidebar}
    >
      <Icon path={mdiMenu} size={28} />
    </button>
    <div class="hidden md:flex">
      <Nav />
    </div>
  {/if}
  <div
    class="absolute top-1/2 right-4 z-50 flex -translate-y-1/2 items-center gap-3"
  >
    <DarkModeToggle />
  </div>
</header>
