<template>
  <div id="cart">
    <!-- 购物车导航栏，默认不显示返回按钮，除非上一个界面是详情页 -->
    <cart-nav-bar :isShowBack="isShowBack"></cart-nav-bar>

    <scroll ref="scroll" class="content">
      <!-- 购物车商品列表 -->
      <cart-list></cart-list>
    </scroll>
    <!-- 价格汇总 -->
    <cart-bottom-bar class="bottom-bar"></cart-bottom-bar>
  </div>
</template>
<script>
import Scroll from "components/common/scroll/Scroll";

import CartNavBar from "./children/CartNavBar";
import CartBottomBar from "./children/CartBottomBar";
import CartList from "./children/CartList";

export default {
  // 购物车组件
  name: "Cart",
  components: {
    CartList,
    Scroll,
    CartBottomBar,
    CartNavBar,
  },
  data() {
    return {
      isShowBack: false, // 是否显示返回按钮
    };
  },
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {
    // 当前路由活跃时刷新一下滚动高度
    this.$refs.scroll.refresh();
  },
  // 组件导航守卫
  beforeRouteEnter(to, from, next) {
    // 如果是从商品详情页跳转来的，则显示返回按钮
    if (/detail/.test(from.path)) {
      next((vm) => {
        vm.$data.isShowBack = true;
      });
    } else {
      next();
    }
  },
};
</script>
<style scoped>
#cart {
  height: 100vh;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 89px;
  right: 0;
  left: 0;
  overflow: hidden;
}
</style>
