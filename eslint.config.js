import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintReact from '@eslint-react/eslint-plugin'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11yX from 'eslint-plugin-jsx-a11y-x'
import prettierConfig from 'eslint-config-prettier'
import globals from 'globals'

const files = ['**/*.{js,jsx,mjs,ts,tsx}']

export default tseslint.config(
    {
        ignores: ['dist/', 'node_modules/', 'coverage/'],
    },
    {
        files,
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files,
        ...eslintReact.configs['recommended-typescript'],
    },
    {
        files,
        ...reactHooks.configs.flat['recommended-latest'],
    },
    {
        files,
        ...eslintReact.configs['disable-conflict-eslint-plugin-react-hooks'],
    },
    {
        files,
        ...jsxA11yX.configs.recommended,
    },
    {
        files,
        ...prettierConfig,
    },
)
