import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'
import ts from 'typescript-eslint'

export default ts.config(
  js.configs.recommended,
  ts.configs.recommended,
  svelte.configs.recommended,
  prettier,
  svelte.configs.prettier,
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } }
  },
  {
    files: ['**/*.svelte', '**/*.svelte.ts'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: ['.svelte'],
        parser: ts.parser
      }
    },
    rules: {
      // This site deploys to a fixed custom-domain root with no `paths.base`,
      // so there is nothing for resolve() to resolve; internal links are
      // plain strings by design (see src/lib/utils/pages.ts).
      'svelte/no-navigation-without-resolve': 'off'
    }
  },
  {
    ignores: [
      'build/',
      '.svelte-kit/',
      'src/lib/generated/',
      'src/lib/paraglide/',
      'project.inlang/cache/',
      'node_modules/'
    ]
  }
)
