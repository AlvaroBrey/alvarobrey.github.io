import { paraglideVitePlugin } from '@inlang/paraglide-js'
import { paraglideOptions } from './paraglide.config.js'
import { enhancedImages } from '@sveltejs/enhanced-img'
import adapter from '@sveltejs/adapter-static'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    paraglideVitePlugin(paraglideOptions),
    enhancedImages(),
    tailwindcss(),
    sveltekit({
      // No SPA fallback: /404 is prerendered to build/404.html instead.
      adapter: adapter(),
      // 404.html is served from arbitrary URLs, so relative asset paths would
      // resolve against the requested path.
      paths: { relative: false },
      prerender: { handleHttpError: 'fail' }
    })
  ]
})
