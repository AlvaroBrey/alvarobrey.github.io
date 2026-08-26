// svelte-check doesn't run Vite, so `precheck` compiles the messages here using
// the same options the Vite plugin gets.
import { compile } from '@inlang/paraglide-js'
import { paraglideOptions } from '../paraglide.config.js'

await compile(paraglideOptions)
