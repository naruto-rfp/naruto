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
    eqeqeq: 'error',
    semi: 'off',
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    quotes: ['error', 'single', 'avoid-escape'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/forbid-prop-types': 0,
    'no-console': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
  ignorePatterns: ['node_modules/', 'dist/', 'coverage/'],
}
