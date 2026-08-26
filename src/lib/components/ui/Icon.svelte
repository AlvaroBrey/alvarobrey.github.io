<script lang="ts">
  interface Props {
    path: string
    size?: number
    class?: string
  }

  let { path, size = 24, class: className = '' }: Props = $props()
</script>

<svg
  viewBox="0 0 24 24"
  width={size}
  height={size}
  fill="currentColor"
  class={className}
  aria-hidden="true"
>
  <path d={path} />
</svg>
