import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

// 创建state对象
const state = {
  cartList:[]
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
