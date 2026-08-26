<script lang="ts">
  import { skillLabels } from '../../data/SkillData'
  import { cvLabels } from '../../model/CVUIModel'
  import type { Skill } from '../../model/CVModel'
  import type { Optional } from '../../types/utilityTypes'

  interface Props {
    skills?: Optional<Skill[]>
    tech?: Optional<string[]>
  }

  let { skills, tech }: Props = $props()
</script>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
  {#if skills}
    <div>
      <p class="mb-1 font-medium text-primary">{cvLabels.skills}</p>
      <ul class="list-disc pl-5">
        {#each skills as skill (skill)}
          <li>{skillLabels[skill]}</li>
        {/each}
      </ul>
    </div>
  {/if}
  {#if tech}
    <div>
      <p class="mb-1 font-medium text-primary">{cvLabels.tech}</p>
      <ul class="list-disc pl-5">
        {#each tech as techItem (techItem)}
          <li>{techItem}</li>
        {/each}
      </ul>
    </div>
  {/if}
</div>
