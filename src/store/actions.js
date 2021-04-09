import { ADD_NEW_PRODUCT, ADD_SAME_PRODUCT } from "./mutations-type"

export default {
  // 添加商品到购物车
  addCart (context, payload) {
    let product = context.state.cartList.find(item => item.iid === payload.iid)
    if(product){
      context.commit(ADD_SAME_PRODUCT, product)
    }else{
      context.commit(ADD_NEW_PRODUCT, payload)
    }
  }
}
