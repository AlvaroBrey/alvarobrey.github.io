<script lang="ts">
  import Header from '$lib/components/layout/Header.svelte'
  import SidebarNav from '$lib/components/layout/SidebarNav.svelte'
  import '../app.css'

  let { children } = $props()

  let sidebarOpen = $state(false)
</script>

<Header onToggleSidebar={() => (sidebarOpen = true)} />
<SidebarNav bind:open={sidebarOpen} />
<main class="mx-auto max-w-6xl px-4 py-8">
  {@render children()}
</main>
