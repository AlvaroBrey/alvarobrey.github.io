<script lang="ts">
  import BasicPage from './BasicPage.svelte'
  import SeoHead from './SeoHead.svelte'
  import Button from './ui/Button.svelte'
  import { t } from '../i18n'

  interface Props {
    title: string
    description: string
  }

  let { title, description }: Props = $props()
</script>

<SeoHead {title} noindex />

<BasicPage {title}>
  <p class="mb-8 text-lg text-muted">{description}</p>
  <div class="flex items-center justify-center">
    <Button href="/">{t('nav.home')}</Button>
  </div>
</BasicPage>
