export default {
  // 购物车商品总数
  cartLength (state) {
    let length = 0
    for(let i of state.cartList) {
      length += i.count
    }
    return length
  },
  // 购物车商品列表
  cartList (state) {
    return state.cartList
  }
}
