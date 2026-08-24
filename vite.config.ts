import adapter from '@sveltejs/adapter-static'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit({
      // No SPA fallback: every route is prerendered, and the postbuild step
      // copies the prerendered /404 page to build/404.html for GitHub Pages.
      adapter: adapter(),
      prerender: { handleHttpError: 'fail' }
    })
  ]
})
