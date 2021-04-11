<template>
  <div id="cart">
    <!-- 顶部标题 -->
    <nav-bar class="cart-nav">
      <template v-slot:center=""
        ><div>购物车( {{ cartLength }} )</div></template
      >
    </nav-bar>
    <scroll ref="scroll">
      <!-- 购物车商品列表 -->
      <cart-list class="content"></cart-list>
    </scroll>
    <!-- 价格汇总 -->
    <cart-bottom-bar class="bottom-bar"></cart-bottom-bar>
  </div>
</template>
<script>
import Scroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navbar/NavBar";

import CartBottomBar from "./children/CartBottomBar";
import CartList from "./children/CartList";

import { mapGetters } from "vuex";

export default {
  // 购物车组件
  name: "Cart",
  components: {
    NavBar,
    CartList,
    Scroll,
    CartBottomBar,
  },
  //计算属性
  computed: {
    //将vuex里的getters映射到局部计算属性
    ...mapGetters({
      cartLength: "cartLength",
    }),
  },
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {
    // 当前路由活跃时刷新一下滚动高度
    this.$refs.scroll.refresh();
  },
};
</script>
<style scoped>
#cart {
  height: 100vh;
}
.cart-nav {
  background-color: var(--color-tint);
  font-size: 5vw;
  color: #fff;
  position: relative;
  z-index: 9;
}

.content {
  /* 视口高度减去上方标题栏，底部汇总栏，下方导航栏高度 */
  height: calc(100vh - 44px -49px - 40px);
}
</style>
