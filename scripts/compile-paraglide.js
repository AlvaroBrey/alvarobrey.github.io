// svelte-check doesn't run Vite, so the plugin never fires for `check`.
import { compile } from '@inlang/paraglide-js'
import { paraglideOptions } from '../paraglide.config.js'

await compile(paraglideOptions)
