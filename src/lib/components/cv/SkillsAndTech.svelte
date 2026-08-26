<script lang="ts">
  import { t } from '../../i18n'
  import type { Optional } from '../../types/utilityTypes'

  interface Props {
    skills?: Optional<string[]>
    tech?: Optional<string[]>
  }

  let { skills, tech }: Props = $props()
</script>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
  {#if skills}
    <div>
      <p class="mb-1 font-medium text-primary">{t('page.cv.skillsTitle')}</p>
      <ul class="list-disc pl-5">
        {#each skills as skill (skill)}
          <li>{t(`page.cv.skills.${skill}`)}</li>
        {/each}
      </ul>
    </div>
  {/if}
  {#if tech}
    <div>
      <p class="mb-1 font-medium text-primary">{t('page.cv.techTitle')}</p>
      <ul class="list-disc pl-5">
        {#each tech as techItem (techItem)}
          <li>{techItem}</li>
        {/each}
      </ul>
    </div>
  {/if}
</div>
