export default {
  addSameProduct (state, payload) {
   payload.count++
  },
  addNewProduct (state, payload) {
   state.cartList.push(payload)
  }
 }
