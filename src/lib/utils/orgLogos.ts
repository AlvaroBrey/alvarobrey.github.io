const logos = import.meta.glob('../assets/orgs/*.png', {
  eager: true,
  query: '?url',
  import: 'default'
}) as Record<string, string>

export function orgLogo(org: string | undefined): string | undefined {
  if (!org) return undefined
  return logos[`../assets/orgs/${org}.png`]
}
