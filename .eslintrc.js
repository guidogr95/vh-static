module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    indent: 'off',
    'eol-last': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'padded-blocks': 'off',
    camelcase: 'off',
    'react/display-name': 'off'
  }
}
