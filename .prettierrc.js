// prettier.config.js or .prettierrc.js
module.exports = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: false, // 句末无分号
  singleQuote: true,
  jsxSingleQuote: false, // 在JSX中使用双引号
  trailingComma: 'all', // 尽可能使用尾随逗号（包括函数参数）
  bracketSpacing: true, // 在对象文字中打印括号之间的空格。
  jsxBracketSameLine: true, // `>`不换行
  arrowParens: 'avoid', // 箭头函数尽可能省略括号
  // eslintIntegration: true,
}
