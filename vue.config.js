/* eslint-disable no-console */
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin') // 支持压缩es6
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'
function resolve(dir) {
  return path.join(__dirname, dir)
}

// 跨域请求路径
const url = 'http://localhost:7001'

console.log('====================================')
console.log(process.env.NODE_ENV, process.argv)
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
  // css相关配置
  css: {
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false,
  },
  // 如果机器有超过1个核心，则默认情况下启用生产构建中的babel和TS的线程加载器
  parallel: require('os').cpus().length > 1,
  // lintOnSave: 'error', // eslint报错停止编译
  productionSourceMap: !isProduction, // 生产环境是否生成 sourceMap 文件
  configureWebpack: () => {
    let config
    if (isProduction) {
      // 生产环境配置
      config = {
        optimization: {
          runtimeChunk: 'single',
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              libs: {
                name: 'chunk-libs',
                test: /[\\/]node_modules[\\/]/,
                priority: 10,
                chunks: 'initial', // 只打包初始时依赖的第三方
              },
              elementUI: {
                name: 'chunk-elementUI', // 单独将 elementUI 拆包
                priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
                test: /[\\/]node_modules[\\/]element-ui[\\/]/,
              },
            },
          },
          minimizer: [
            new TerserPlugin({
              parallel: true, // 并行压缩
              cache: true, // 缓存
              terserOptions: {
                warnings: false,
                ie8: false,
                ecma: 6,
                mangle: true,
                output: {
                  comments: false,
                  beautify: false,
                },
                compress: {
                  warnings: false, // 删除没有用到的代码时不输出警告
                  drop_console: true, // 移除console
                  drop_debugger: true,
                  pure_funcs: ['console.log'],
                  // 提取出出现多次但是没有定义成变量去引用的静态值
                  reduce_vars: true,
                },
              },
            }),
            // 压缩提取的CSS,删除来自不同组件重复的css
            new OptimizeCSSAssetsPlugin({
              cssProcessorOptions: {
                safe: true,
              },
            }),
          ],
        },
        plugins: [
          new CompressionWebpackPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.(js|jsx|css)$/i,
            threshold: 8192,
            minRatio: 0.8,
            deleteOriginalAssets: true, // 是否删除原始文件。
          }),
        ],
        devtool: false,
      }
    } else {
      // 开发环境配置
      config = {}
    }
    // 开发生产共同配置
    Object.assign(config, {})
    return config
  },
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
