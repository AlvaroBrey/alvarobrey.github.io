<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import Footer from '$lib/components/layout/Footer.svelte'
  import Header from '$lib/components/layout/Header.svelte'
  import SidebarNav from '$lib/components/layout/SidebarNav.svelte'
  import '../app.css'

  let { children } = $props()

  let sidebarOpen = $state(false)
</script>

<a
  href="#content"
  class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-on-primary"
>
  {m.aria_skip_to_content()}
</a>
<div class="flex min-h-screen flex-col">
  <Header onToggleSidebar={() => (sidebarOpen = true)} />
  <SidebarNav bind:open={sidebarOpen} />
  <main id="content" class="mx-auto w-full max-w-6xl grow px-4 py-8">
    {@render children()}
  </main>
  <Footer />
</div>
