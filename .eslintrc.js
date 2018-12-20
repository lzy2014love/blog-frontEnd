module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
    mocha: true,
  },
  extends: ['plugin:vue/strongly-recommended', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'arrow-parens': ['error', 'as-needed'],
    'func-names': ['error', 'as-needed'],
    'global-require': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'no-restricted-globals': ['error', 'event'],
    'no-extend-native': ['error'],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
      },
    ],
    'no-param-reassign': ['error', { props: false }],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
    'vue/attribute-hyphenation': [
      'error',
      'always',
      {
        ignore: ['DTO'],
      },
    ],

    // 'import/no-unresolved': ['error', { ignore: ['\.vue$'] }],
    // 'linebreak-style': ['off'],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'never'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
