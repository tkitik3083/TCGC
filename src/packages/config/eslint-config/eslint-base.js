module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'unused-imports'],
  rules: {},
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {},
    },
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      rules: {
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'unknown',
              'parent',
              'sibling',
              'index',
              'object',
              'type',
            ],
            alphabetize: {
              order: 'asc',
            },
            'newlines-between': 'always',
            pathGroups: [
              {
                pattern: '@tcgc/**',
                group: 'internal',
                position: 'after',
              },
            ],
            pathGroupsExcludedImportTypes: [],
          },
        ],
        'import/no-unresolved': 'off',
        'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
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
      },
    },
  ],
};
