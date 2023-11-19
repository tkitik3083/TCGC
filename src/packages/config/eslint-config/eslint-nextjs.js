module.exports = {
  extends: [
    'next',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['unused-imports'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/**/*/'],
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
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
              {
                pattern: '~/**',
                group: 'parent',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: [],
          },
        ],
        'import/no-unresolved': 'off',
      },
    },
  ],
};
