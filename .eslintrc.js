module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ['plugin:react/recommended', 'airbnb-base'],
  plugins: [
    'react'
  ],
  rules: {
    'class-methods-use-this': 0
  }
};
