// eslint-disable-next-line import/extensions
import Vue from 'vue'
// eslint-disable-next-line import/extensions
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
  },
  getters,
})

export default store
