const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
    mocha: true,
  },
  globals: {
    // Vue: false,
  },
  extends: ['plugin:vue/strongly-recommended', '@vue/airbnb'],
  rules: {
    'no-console': 'off',
    'no-debugger': isProduction ? 'error' : 'off',
    'arrow-parens': ['error', 'as-needed'],
    'func-names': ['error', 'as-needed'],
    'global-require': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'no-restricted-globals': ['error', 'event'],
    'no-extend-native': ['error'],
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
        ignore: ['DTO', 'VO'],
      },
    ],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
      },
    ],
    'import/no-unresolved': [
      'error',
      { ignore: ['vue', 'vue-router', 'vuex', 'element-ui', 'axios', 'js-cookie', 'nprogress'] },
    ],
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', 120],
    'no-restricted-syntax': ['error', 'WithStatement', "BinaryExpression[operator='in']"],
    semi: ['error', 'never'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
