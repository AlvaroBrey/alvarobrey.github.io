export interface LabeledValue {
  label: string
  value: string
}

export const cvPdfProfile = {
  name: 'Álvaro Brey Vilas',
  headline: 'Senior Android Engineer',
  location: 'Santiago de Compostela, Spain',
  website: 'https://alvarobrey.com'
}

export const cvPdfAbout: string[] = [
  'With a generalist background, I have been developing Android software since 2016 and it is where I feel most comfortable. I am not afraid of other stacks or platforms: I have done significant work as a DevOps and frontend developer, and have made contributions to backend and wherever I could add value.',
  'I am passionate about automation, developer experience, frictionless processes and clean code. Throughout my career I have made a point in contributing to all four, regardless of my position. I am also an open-source enthusiast with various published repositories and contributions to many public projects.'
]

export const cvPdfSkills: LabeledValue[] = [
  {
    label: 'Source languages',
    value: 'Kotlin, Shell, Python, Elixir, TypeScript, Java, Javascript'
  },
  {
    label: 'Tools and frameworks',
    value:
      'Android SDK, Gradle, Gitlab CI, Docker, AI Agents, Git, VueJS, NuxtJS'
  }
]

export const cvPdfLanguages: LabeledValue[] = [
  { label: 'Native', value: 'Spanish, Galician' },
  { label: 'Foreign', value: 'English (Full professional proficiency)' }
]
