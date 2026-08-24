<script lang="ts">
  import type { Snippet } from 'svelte'

  interface Props {
    href?: string
    target?: string
    variant?: 'filled' | 'text'
    type?: 'button' | 'submit'
    class?: string
    onclick?: () => void
    children: Snippet
  }

  let {
    href,
    target,
    variant = 'filled',
    type = 'button',
    class: className = '',
    onclick,
    children
  }: Props = $props()

  const base =
    'inline-flex items-center gap-2 rounded px-4 py-2 text-sm font-medium tracking-wide uppercase no-underline transition-colors'
  const variantClass = $derived(
    variant === 'filled'
      ? 'bg-primary text-on-primary hover:opacity-90'
      : 'text-primary hover:bg-primary/10'
  )
</script>

{#if href}
  <a {href} {target} class="{base} {variantClass} {className}">
    {@render children()}
  </a>
{:else}
  <button {type} {onclick} class="{base} {variantClass} {className}">
    {@render children()}
  </button>
{/if}
