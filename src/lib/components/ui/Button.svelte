<script lang="ts">
  import type { Snippet } from 'svelte'

  interface Props {
    href: string
    target?: string
    class?: string
    children: Snippet
  }

  let { href, target, class: className = '', children }: Props = $props()
</script>

<a
  {href}
  {target}
  class="inline-flex items-center gap-2 rounded bg-primary px-4 py-2 text-sm font-medium tracking-wide text-on-primary uppercase no-underline transition-colors hover:opacity-90 {className}"
>
  {@render children()}
</a>
