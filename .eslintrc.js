module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint-config-airbnb-base',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 0,
    'no-multiple-empty-lines': 'error',
    'max-len': ['warn', {
      code: 125,
      comments: 250,
      ignoreTemplateLiterals: true,
      ignorePattern: '^import .*',
      ignoreUrls: true,
    }],
    'no-empty-function': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-return-await': 0,
    'no-unused-vars': 0,
    semi: ['error', 'never'],
    "import/no-extraneous-dependencies": 0
  },
}
