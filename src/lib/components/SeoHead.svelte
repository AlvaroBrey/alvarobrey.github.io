<script lang="ts">
  import { page } from '$app/state'
  import { pageDescription } from '../utils/pages'
  import { isProfilePage, pageGraph } from '../utils/jsonLd'
  import {
    SITE_URL,
    canonicalPath,
    canonicalUrl,
    markdownUrl
  } from '../utils/urls'

  interface Props {
    title: string
    noindex?: boolean
  }

  let { title, noindex = false }: Props = $props()

  const OG_IMAGE = `${SITE_URL}/og_image.png`
  const SITE_NAME = 'Álvaro Brey'

  const href = $derived(canonicalPath(page.url.pathname))
  const canonical = $derived(canonicalUrl(page.url.pathname))
  const fullTitle = $derived(`${title} - ${SITE_NAME}`)
  const description = $derived(pageDescription(href))

  // Escaped so neither Svelte's parser nor the JSON payload can close the tag.
  const jsonLd = $derived(
    `<script type="application/ld+json">${pageGraph(href).replace(/</g, '\\u003c')}\u003c/script>`
  )
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="author" content={SITE_NAME} />
  {#if noindex}
    <meta name="robots" content="noindex" />
  {:else}
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <link
      rel="alternate"
      type="text/markdown"
      href={markdownUrl(href)}
      title="{title} as Markdown"
    />
    <meta
      property="og:type"
      content={isProfilePage(href) ? 'profile' : 'website'}
    />
    <meta property="og:site_name" content={SITE_NAME} />
    <meta property="og:url" content={canonical} />
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={OG_IMAGE} />
    <meta property="og:image:alt" content="Álvaro Brey — alvarobrey.com" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={fullTitle} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={OG_IMAGE} />
    <!-- eslint-disable-next-line svelte/no-at-html-tags -- generated JSON-LD, escaped above -->
    {@html jsonLd}
  {/if}
</svelte:head>
