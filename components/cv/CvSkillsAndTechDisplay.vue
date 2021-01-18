<template>
  <v-row>
    <v-col v-if="skills" cols="12" xs="12" sm="6">
      <p class="font-weight-medium mb-1 primary--text">
        {{ $t('page.cv.skillsTitle') }}
      </p>
      <ul>
        <li v-for="skill in skills" :key="skill">
          {{ $t(`page.cv.skills.${skill}`) }}
        </li>
      </ul>
    </v-col>
    <v-col v-if="tech" cols="12" xs="12" sm="6">
      <p class="font-weight-medium mb-1 primary--text">
        {{ $t('page.cv.techTitle') }}
      </p>
      <ul>
        <li v-for="techItem in tech" :key="techItem">
          {{ techItem }}
        </li>
      </ul>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Optional } from '~/types/utilityTypes'

export default Vue.extend({
  name: 'CvSkillsAndTechDisplay',
  props: {
    skills: {
      type: Array,
      default: undefined
    } as PropOptions<Optional<string[]>>,
    tech: {
      type: Array,
      default: undefined
    } as PropOptions<Optional<string[]>>
  }
})
</script>
