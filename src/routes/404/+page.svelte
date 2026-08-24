<script lang="ts">
  import NotFound from '$lib/components/NotFound.svelte'
  import { t } from '$lib/i18n'
</script>

<NotFound
  title={t('error.404.title')}
  description={t('error.404.description')}
/>
