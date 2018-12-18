module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
    mocha: true,
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'arrow-parens': ['error', 'as-needed'],
    'func-names': ['error', 'as-needed'],
    'global-require': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'no-restricted-globals': ['error', 'event'],
    'no-extend-native': ['error'],
    'linebreak-style': ['off'],
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'avoid',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        printWidth: 120,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        eslintIntegration: true,
        trailingComma: 'all',
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
