export interface ContactLink {
  key: string
  label: string
  link: string
}

export const contactLinks: ContactLink[] = [
  {
    key: 'linkedIn',
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/alvarobrey'
  },
  {
    key: 'gitHub',
    label: 'GitHub',
    link: 'https://github.com/alvarobrey'
  },
  {
    key: 'mail',
    label: 'Email',
    link: 'mailto:alvaro@alvarobrey.com'
  }
]
