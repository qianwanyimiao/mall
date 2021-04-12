import { ADD_NEW_PRODUCT, ADD_SAME_PRODUCT } from "./mutations-type"

export default {
  // 添加商品到购物车
  addCart (context, payload) {
    return new Promise((resolve) => {
      // 1.查找购物车是否存在该商品
    let product = context.state.cartList.find(item => item.iid === payload.iid)
    if(product){
      context.commit(ADD_SAME_PRODUCT, [product, payload])
    }else{
      context.commit(ADD_NEW_PRODUCT, payload)
    }
    resolve('加入购物车成功')
    })

  }
}
