import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettierConfig from 'eslint-config-prettier'
import globals from 'globals'

const files = ['**/*.{js,jsx,ts,tsx}']

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
        plugins: {
            react,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            ...react.configs.flat.recommended.rules,
            ...react.configs.flat['jsx-runtime'].rules,
        },
    },
    {
        files,
        ...reactHooks.configs.flat['recommended-latest'],
    },
    {
        files,
        ...jsxA11y.flatConfigs.recommended,
    },
    {
        files,
        ...prettierConfig,
    },
)
