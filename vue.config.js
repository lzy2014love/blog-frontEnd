/* eslint-disable no-console */
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// 跨域请求路径
const url = 'http://localhost:7001'

console.log('====================================')
console.log(process.env.NODE_ENV)
console.log('====================================')
module.exports = {
  baseUrl: '/',
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 1234,
    https: false,
    hotOnly: false,
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    // proxy: null, // string | Object
    // before: app => {},
    proxy: {
      '/api': {
        target: url,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/',
        },
      },
    },
  },
  // eslint报错停止编译
  lintOnSave: 'error',
  productionSourceMap: !(process.env.NODE_ENV === 'production'),
  chainWebpack: config => {
    // 设置别名
    config.resolve.alias.set('@', resolve('src'))

    const svgRule = config.module.rule('svg')
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()
    // 添加要替换的 loader
    svgRule.include
      .add(resolve('src'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
  },
}
