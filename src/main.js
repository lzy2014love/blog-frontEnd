import '@/styles/index.scss' // global css
// eslint-disable-next-line import/extensions
import Vue from 'vue'
// eslint-disable-next-line import/extensions
import ElementUI from 'element-ui'

import App from './App.vue'
import router from './router'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control

Vue.use(ElementUI)

// 生产环境关闭devtool
if (process.env.NODE_ENV === 'production') {
  Vue.config.productionTip = false
}
console.log('====================================')
console.log(process.env.NODE_ENV)
console.log('====================================')
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
