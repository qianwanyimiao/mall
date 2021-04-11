<template>
  <div class="bottom-bar">
    <!-- 全选框 -->
    <div class="left">
      <check-button
        class="check-button"
        :is-checked="isSelectAll"
        @click.native="selectAll"
      ></check-button>
      <span>全选</span>
    </div>
    <!-- 购物车选中的商品总额 -->
    <div class="price">合计: ￥{{ totalPrice }}</div>
    <span class="calculate">去结算: ({{ total }})</span>
  </div>
</template>
<script>
import CheckButton from "components/content/checkButton/CheckButton";
import { mapGetters } from "vuex";
export default {
  // 购物车底部组件
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  //计算属性
  computed: {
    // 将vuex里的getters映射到计算属性
    ...mapGetters(["cartList"]),
    // 选中的商品总价格
    totalPrice() {
      return this.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((pre, item) => {
          return item.price * item.count + pre;
        }, 0)
        .toFixed(2);
    },
    // 选中的商品总数
    total() {
      return this.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((pre, item) => {
          return item.count + pre;
        }, 0);
    },
    // 是否全选
    isSelectAll() {
      return (
        this.cartList.length !== 0 &&
        !this.cartList.some((item) => {
          return !item.checked;
        })
      );
    },
  },
  //方法集合
  methods: {
    // 点击全选按钮
    selectAll() {
      if (this.isSelectAll) {
        for (let item of this.cartList) {
          item.checked = false;
        }
      } else {
        this.cartList.forEach((item) => (item.checked = true));
      }
      // this.cartList.forEach(item => item.checked = !this.isSelectAll);
    },
  },
};
</script>
<style scoped>
.bottom-bar {
  position: relative;
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: #eee;
}

.left {
  height: inherit;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-right: 8vw;
}
.check-button {
  width: 5vw;
  height: 5vw;
  line-height: 5vw;
  margin-right: 2vw;
}

.calculate {
  padding: 0 1vw;
  margin-left: auto;
  background-color: var(--color-tint);
  color: #fff;
}
</style>
