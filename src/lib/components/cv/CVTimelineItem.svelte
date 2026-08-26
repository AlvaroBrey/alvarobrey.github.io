<script lang="ts">
  import { format } from 'date-fns'
  import type { Optional } from '../../types/utilityTypes'
  import type { CVTimelineItem as CVTimelineItemType } from '../../model/CVModel'
  import {
    CV_DATE_FORMAT,
    CVItemTypeColors,
    cvLabels
  } from '../../model/CVUIModel'
  import { orgs } from '../../data/OrgData'
  import { shouldShowOrgName } from '../../utils/cvTimeline'
  import { orgLogo } from '../../utils/orgLogos'
  import Card from '../ui/Card.svelte'
  import SkillsAndTech from './SkillsAndTech.svelte'

  interface Props {
    item: CVTimelineItemType
  }

  let { item }: Props = $props()

  const color = $derived(CVItemTypeColors[item.type])
  const org = $derived(
    shouldShowOrgName(item) && item.org ? orgs[item.org] : undefined
  )
  const logo = $derived(orgLogo(item.org))

  function formatDate(date: Optional<Date>): string {
    return date ? format(date, CV_DATE_FORMAT) : cvLabels.present
  }

  const dateText = $derived(
    item.startDate
      ? `${formatDate(item.startDate)} - ${formatDate(item.endDate)}`
      : formatDate(item.endDate)
  )
</script>

<div class="relative pl-10">
  {#if logo}
    <!-- Below sm the logo rides in the dot rather than beside the card. -->
    <enhanced:img
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
          {item.title}
        </h3>
        <p class="text-sm text-muted">
          {#if org}
            {#if org.url}
              <a href={org.url} target="_blank" rel="noopener">{org.name}</a>
            {:else}
              {org.name}
            {/if}
            <span class="mx-1">|</span>
          {/if}
          <span>{dateText}</span>
        </p>
        {#if item.shortDescription}
          <!-- eslint-disable-next-line svelte/no-at-html-tags -- locale content, not user input -->
          <p class="mt-2 text-sm text-body">{@html item.shortDescription}</p>
        {/if}
        {#if item.skills || item.tech}
          <div class="mt-2">
            <SkillsAndTech skills={item.skills} tech={item.tech} />
          </div>
        {/if}
      </div>
      {#if logo}
        <enhanced:img
          src={logo}
          alt=""
          class="hidden shrink-0 object-contain sm:block sm:h-20 sm:w-20 lg:h-36 lg:w-36"
        />
      {/if}
    </div>
  </Card>
</div>
