import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

// 创建state对象
const state = {
  cartList:[],  // 购物车列表
  isFromDetail:false  // 是否从详情页跳转到购物车
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
