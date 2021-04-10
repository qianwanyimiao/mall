import { ADD_NEW_PRODUCT, ADD_SAME_PRODUCT } from "./mutations-type"

export default {
  // 添加商品到购物车
  addCart (context, payload) {
    return new Promise((resolve) => {
      // 1.查找购物车是否存在该商品
    let product = context.state.cartList.find(item => item.iid === payload.iid)
    if(product){
      context.commit(ADD_SAME_PRODUCT, product)
      resolve('购物车该商品数量+1')
    }else{
      context.commit(ADD_NEW_PRODUCT, payload)
      resolve('购物车添加了新的商品')
    }
    })

  }
}
