<script lang="ts">
  import { format } from 'date-fns'
  import type { Optional } from '../../types/utilityTypes'
  import type { CVTimelineItem as CVTimelineItemType } from '../../model/CVModel'
  import { CV_DATE_FORMAT, CVItemTypeColors } from '../../model/CVUIModel'
  import { orgUrls } from '../../data/OrgData'
  import { shouldShowOrgName } from '../../utils/cvTimeline'
  import { orgLogo } from '../../utils/orgLogos'
  import { t } from '../../i18n'
  import SkillsAndTech from './SkillsAndTech.svelte'

  interface Props {
    item: CVTimelineItemType
  }

  let { item }: Props = $props()

  const color = $derived(CVItemTypeColors[item.type])
  const showOrgName = $derived(shouldShowOrgName(item))
  const orgName = $derived(item.org ? t(`page.cv.orgs.${item.org}`) : '')
  const orgUrl = $derived(item.org ? orgUrls[item.org] : undefined)
  const description = $derived(t(`page.cv.items.${item.key}.shortDescription`))
  const logo = $derived(orgLogo(item.org))

  function formatDate(date: Optional<Date>): string {
    return date ? format(date, CV_DATE_FORMAT) : t('page.cv.present')
  }

  const dateText = $derived(
    item.startDate
      ? `${formatDate(item.startDate)} - ${formatDate(item.endDate)}`
      : formatDate(item.endDate)
  )
</script>

<div class="relative pl-10">
  <div
    class="absolute top-1.5 left-4 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-background"
    style="background-color: {color}"
  ></div>
  <div class="rounded bg-surface p-4 shadow">
    <div class="flex justify-between gap-4">
      <div class="flex-1">
        <h3 class="text-lg font-medium text-body">
          {t(`page.cv.items.${item.key}.title`)}
        </h3>
        <p class="text-sm text-muted">
          {#if showOrgName}
            {#if orgUrl}
              <a href={orgUrl} class="hover:underline">{orgName}</a>
            {:else}
              {orgName}
            {/if}
            <span class="mx-1">|</span>
          {/if}
          <span>{dateText}</span>
        </p>
        {#if description}
          <!-- eslint-disable-next-line svelte/no-at-html-tags -- locale content, not user input -->
          <p class="mt-2 text-sm text-body">{@html description}</p>
        {/if}
        {#if item.skills || item.tech}
          <div class="mt-2">
            <SkillsAndTech skills={item.skills} tech={item.tech} />
          </div>
        {/if}
      </div>
      {#if logo}
        <img src={logo} alt="" class="h-20 w-20 shrink-0 object-contain" />
      {/if}
    </div>
  </div>
</div>
