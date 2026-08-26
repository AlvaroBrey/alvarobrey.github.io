/**
 * Shared by vite.config.ts (dev/build) and scripts/compile-paraglide.js, which
 * `precheck` runs because svelte-check doesn't go through Vite. Keeping one
 * options object means `check` can't type-check a differently-configured
 * runtime than the one that ships.
 */
/** @type {import('@inlang/paraglide-js').CompilerOptions} */
export const paraglideOptions = {
  project: './project.inlang',
  outdir: './src/lib/paraglide',
  // The site has exactly one locale. The default strategy includes `cookie`,
  // which makes every message call parse document.cookie and then write
  // PARAGLIDE_LOCALE for 400 days -- a cookie on a site that otherwise sets
  // none, recording the only locale there is.
  strategy: ['baseLocale'],
  emitReadme: false
}
