<script lang="ts">
  import { t } from '../../i18n'
  import { displayUrl } from '../../utils/urls'
  import Icon from '../ui/Icon.svelte'

  interface Props {
    icon: string
    translationKey: string
    link: string
  }

  let { icon, translationKey, link }: Props = $props()

  const tooltip = $derived(displayUrl(link))
</script>

<div class="group relative flex flex-col items-center text-center">
  <a href={link} target="_blank" rel="noopener" class="block no-underline">
    <Icon
      path={icon}
      size={120}
      class="text-body transition-colors group-hover:text-primary"
    />
    <p class="text-lg transition-colors group-hover:text-body">
      {t(`page.contact.item.${translationKey}`)}
    </p>
  </a>
  <span
    class="pointer-events-none absolute -bottom-8 rounded bg-surface px-2 py-1 text-xs whitespace-nowrap text-body opacity-0 shadow transition-opacity group-hover:opacity-100"
  >
    {tooltip}
  </span>
</div>
