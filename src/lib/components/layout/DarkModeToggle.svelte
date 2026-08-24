<script lang="ts">
  import { browser } from '$app/environment'
  import { mdiMoonWaningCrescent, mdiWhiteBalanceSunny } from '@mdi/js'
  import { t } from '../../i18n'
  import { applyDark, isDark, storeDark } from '../../utils/theme'
  import Icon from '../ui/Icon.svelte'

  // Only drives aria-checked -- the visuals follow the `dark` class on <html>
  // via dark: variants, so the prerendered markup is already correct.
  let dark = $state(browser ? isDark() : false)

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
    class="text-primary dark:text-muted"
  />
  <span
    class="relative inline-flex h-5 w-9 items-center rounded-full bg-muted/30 transition-colors dark:bg-primary"
  >
    <span
      class="inline-block h-4 w-4 translate-x-0.5 transform rounded-full bg-surface transition-transform dark:translate-x-4"
    ></span>
  </span>
  <Icon
    path={mdiMoonWaningCrescent}
    size={20}
    class="text-muted dark:text-primary"
  />
</button>
