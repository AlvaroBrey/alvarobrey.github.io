// Shared with scripts/compile-paraglide.js so `check` can't validate a
// differently-configured runtime than the one that ships.
/** @type {import('@inlang/paraglide-js').CompilerOptions} */
export const paraglideOptions = {
  project: './project.inlang',
  outdir: './src/lib/paraglide',
  // Without this the default strategy writes a 400-day PARAGLIDE_LOCALE
  // cookie to record the only locale the site has.
  strategy: ['baseLocale'],
  emitReadme: false
}
