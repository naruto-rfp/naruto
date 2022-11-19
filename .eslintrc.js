module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'single', 'avoid-escape'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/forbid-prop-types': 0,
    'no-console': 'off',
  },
};
