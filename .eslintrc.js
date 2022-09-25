// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'simple-import-sort'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-console': 0,
    'no-unused-vars': 0,
    'no-param-reassign': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        args: 'all',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'prettier/prettier': 2,
  },
};
