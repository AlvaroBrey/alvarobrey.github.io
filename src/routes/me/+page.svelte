<script lang="ts">
  import BasicPage from '$lib/components/BasicPage.svelte'
  import InfoBar from '$lib/components/InfoBar.svelte'
  import SeoHead from '$lib/components/SeoHead.svelte'
  import Card from '$lib/components/ui/Card.svelte'
  import { t } from '$lib/i18n'

  const [contactBefore, contactAfter] = t('page.me.lookingForContact').split(
    '{0}'
  )
</script>

<SeoHead title={t('nav.me')} />

<!-- eslint-disable svelte/no-at-html-tags -- locale content, not user input -->
<BasicPage title={t('page.me.title')}>
  <Card class="mt-4">
    <div class="space-y-4 p-6 text-body">
      <p>{@html t('page.me.intro')}</p>
      <p>{@html t('page.me.automation')}</p>
      <p>{@html t('page.me.opensource')}</p>
      <p>{@html t('page.me.personal')}</p>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <p class="mb-0 text-sm tracking-wide text-primary uppercase">
            {t('page.me.whatIDo')}
          </p>
          <ul class="list-disc pl-5">
            <li>Android</li>
            <li>Kotlin, Compose</li>
            <li>Shell, Python</li>
            <li>Docker</li>
            <li>Git</li>
            <li>Linux</li>
            <li>VueJS, Typescript</li>
            <li>Ansible</li>
          </ul>
        </div>
        <div>
          <p class="mb-0 text-sm tracking-wide text-primary uppercase">
            {t('page.me.whatILike')}
          </p>
          <ul class="list-disc pl-5">
            <li>{t('page.me.likes.automation')}</li>
            <li>{t('page.me.likes.cleanCode')}</li>
            <li>{t('page.me.likes.openSource')}</li>
            <li>{t('page.me.likes.fp')}</li>
            <li>{t('page.me.likes.reproducible')}</li>
            <li>{t('page.me.likes.pairProgramming')}</li>
          </ul>
        </div>
      </div>
    </div>
  </Card>
  <InfoBar class="mt-4">
    <span
      >{contactBefore}<a href="/contact" class="underline"
        >{t('page.me.contactPage')}</a
      >{contactAfter}</span
    >
  </InfoBar>
</BasicPage>

<style>
  :global(a.simon) {
    color: inherit !important;
    text-decoration: inherit !important;
  }
</style>
