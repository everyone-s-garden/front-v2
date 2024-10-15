module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import', 'unused-imports'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'newline-before-return': 'error',
    'import/newline-after-import': 'error',
    'storybook/prefer-pascal-case': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'type',
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/pages*',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/hooks*',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/components*',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/services*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/utils*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/stores*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/types*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/assets/icons*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/assets/images*',
            group: 'internal',
            position: 'after',
          },
        ],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
};
