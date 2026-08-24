<script lang="ts">
  import { format } from 'date-fns'
  import type { Optional } from '../../types/utilityTypes'
  import type { CVTimelineItem as CVTimelineItemType } from '../../model/CVModel'
  import { CV_DATE_FORMAT, CVItemTypeColors } from '../../model/CVUIModel'
  import { orgUrls } from '../../data/OrgData'
  import { shouldShowOrgName } from '../../utils/cvTimeline'
  import { orgLogo } from '../../utils/orgLogos'
  import { t } from '../../i18n'
  import Card from '../ui/Card.svelte'
  import SkillsAndTech from './SkillsAndTech.svelte'

  interface Props {
    item: CVTimelineItemType
  }

  let { item }: Props = $props()

  const color = $derived(CVItemTypeColors[item.type])
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
  {#if logo}
    <!-- On the narrowest screens the logo rides in the timeline dot instead of
         beside the card, so it doesn't eat the card's text width. -->
    <img
      src={logo}
      alt=""
      class="absolute top-0 left-4 h-10 w-10 -translate-x-1/2 rounded-full bg-white object-contain p-1 sm:hidden"
      style="box-shadow: 0 0 0 2px {color}"
    />
  {/if}
  <div
    class="absolute top-1.5 left-4 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-background {logo
      ? 'max-sm:hidden'
      : ''}"
    style="background-color: {color}"
  ></div>
  <Card class="p-4">
    <div class="flex justify-between gap-4">
      <div class="flex-1">
        <h3 class="text-xl font-medium text-primary">
          {t(`page.cv.items.${item.key}.title`)}
        </h3>
        <p class="text-sm text-muted">
          {#if item.org && shouldShowOrgName(item)}
            {@const orgName = t(`page.cv.orgs.${item.org}`)}
            {#if orgUrls[item.org]}
              <a href={orgUrls[item.org]} target="_blank" rel="noopener">
                {orgName}
              </a>
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
        <img
          src={logo}
          alt=""
          class="hidden shrink-0 object-contain sm:block sm:h-20 sm:w-20 lg:h-36 lg:w-36"
        />
      {/if}
    </div>
  </Card>
</div>
