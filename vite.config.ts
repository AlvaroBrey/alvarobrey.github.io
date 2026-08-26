import { enhancedImages } from '@sveltejs/enhanced-img'
import adapter from '@sveltejs/adapter-static'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    enhancedImages(),
    tailwindcss(),
    sveltekit({
      // No SPA fallback: every route is prerendered, and /404 emits
      // build/404.html directly (see src/routes/404/+page.ts).
      adapter: adapter(),
      // 404.html is served from arbitrary URLs, so its asset references have to
      // be absolute -- relative ones resolve against the requested path and
      // break for anything below the root.
      paths: { relative: false },
      prerender: { handleHttpError: 'fail' }
    })
  ]
})
