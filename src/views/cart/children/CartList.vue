<template>
  <div class="cart-list">
    <cart-list-item
      class="cart-list-item"
      v-for="item in cartList"
      :key="item.iid"
      :itemInfo="item"
    >
    </cart-list-item>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import CartListItem from "./CartListItem";

export default {
  // 购物车列表
  name: "CartList",
  components: {
    CartListItem,
  },
  //计算属性
  computed: {
    // 将vuex getters映射到组件的计算属性
    ...mapGetters({
      cartList: "cartList",
    }),
  },
};
</script>
<style scoped>
.cart-list-item {
  width: 100vw;
}
</style>
