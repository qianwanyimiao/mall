// 最好是由mutation改变state里的数据，才能在开发工具实时监听到数据的改变
export default {
  addSameProduct(state, payload) {
    let product = payload[0], newOne = payload[1]
    product.count += newOne.count
    let item = product.count_size.find(item => item[0] === newOne.count_size[0][0])
    if(item){
      item[1] += newOne.count_size[0][1]
    }else{
      product.count_size.push(newOne.count_size[0])
    }
  },
  addNewProduct(state, payload) {
    state.cartList.push(payload)
  }
}
