import Vue from 'vue'
import Vuex from 'vuex'
import auth from './module-auth'
import crud from './module-crud'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

 export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      auth,
      crud
    },
    plugins: [createPersistedState()],
    strict: process.env.DEBUGGING
  })

  return Store
}
