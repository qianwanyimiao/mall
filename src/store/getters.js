// 跟计算属性差不多
export default {
  // 购物车商品总数
  cartLength (state) {
    return state.cartList.length
  },
  // 购物车商品列表
  cartList (state) {
    return state.cartList
  }
}
