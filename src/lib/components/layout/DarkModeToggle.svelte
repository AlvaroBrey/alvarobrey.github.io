<script lang="ts">
  import { mdiMoonWaningCrescent, mdiWhiteBalanceSunny } from '@mdi/js'
  import { onMount } from 'svelte'
  import { t } from '../../i18n'
  import { applyDark, storeDark } from '../../utils/theme'
  import Icon from '../ui/Icon.svelte'

  let dark = $state(false)

  onMount(() => {
    dark = document.documentElement.classList.contains('dark')
  })

  function toggle() {
    dark = !dark
    applyDark(dark)
    storeDark(dark)
  }
</script>

<button
  type="button"
  role="switch"
  aria-checked={dark}
  aria-label={t('aria.darkMode')}
  onclick={toggle}
  class="flex items-center gap-1"
>
  <Icon
    path={mdiWhiteBalanceSunny}
    size={20}
    class={dark ? 'text-muted' : 'text-primary'}
  />
  <span
    class="relative inline-flex h-5 w-9 items-center rounded-full transition-colors {dark
      ? 'bg-primary'
      : 'bg-muted/30'}"
  >
    <span
      class="inline-block h-4 w-4 transform rounded-full bg-surface transition-transform {dark
        ? 'translate-x-4'
        : 'translate-x-0.5'}"
    ></span>
  </span>
  <Icon
    path={mdiMoonWaningCrescent}
    size={20}
    class={dark ? 'text-primary' : 'text-muted'}
  />
</button>
