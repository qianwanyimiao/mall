// 最好是由mutation改变state里的数据，才能在开发工具实时监听到数据的改变
export default {
  addSameProduct (state, payload) {
   payload.count++
  },
  addNewProduct (state, payload) {
   state.cartList.push(payload)
  }
 }
