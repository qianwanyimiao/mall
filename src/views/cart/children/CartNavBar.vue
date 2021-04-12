<template>
  <div class="cart-nav-bar">
    <!-- 顶部标题 -->
    <nav-bar class="cart-nav">
      <!-- 返回按钮 -->
      <template v-slot:left="">
        <div class="back" @click="backClick" v-show="isShowBack">
          <img src="~assets/img/common/back_white.svg" alt="返回按钮" />
        </div>
      </template>
      <template v-slot:center=""
        ><div>购物车( {{ cartLength }} )</div></template
      >
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import { mapGetters } from "vuex";

export default {
  name: "CartNavBar",
  components: {
    NavBar,
  },
  props: {
    isShowBack: {
      type: Boolean,
      default: false,
    },
  },
  //计算属性
  computed: {
    //将vuex里的getters映射到局部计算属性
    ...mapGetters({
      cartLength: "cartLength",
    }),
  },
  //方法集合
  methods: {
    // 返回按钮
    backClick() {
      this.$back();
    },
  },
};
</script>
<style scoped>
.cart-nav {
  background-color: var(--color-tint);
  font-size: 5vw;
  color: #fff;
  position: relative;
  z-index: 9;
}

.back {
  position: relative;
  height: 100%;
}

.back img {
  /* 在back里居中 */
  height: 60%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
</style>
