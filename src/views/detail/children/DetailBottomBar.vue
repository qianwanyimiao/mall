<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
      <div @click="$goTo('/cart')">
      <img src="~assets/img/detail/cartIcon.png" class='cartIcon' alt="">
      <span class="text">购物车</span>
    </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>
<script>
export default {
  // 详情页底部导航
  name: "DetailBottomBar",
  //方法集合
  methods: {
    addToCart() { // 添加购物车
      this.$emit("addToCart");
    },
    // buy() { // 直接购买
    //   this.$emit('buy')
    // }
  },
};
</script>
<style scoped>
.bottom-bar {
  height: 49px;
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  text-align: center;
}

.bar-item {
  flex: 1;
  display: flex;
}
/* >表示选择bar-item子一代的div元素，不使用>直接两个连起来
  表示选择后代所有div元素 */
.bar-item > div {
  flex: 1;
}

.bar-left .text {
  font-size: 13px;
}

.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 3px;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}

.bar-left .service {
  background-position: 0 -54px;
}

.bar-left .shop {
  background-position: 0 -98px;
}

.bar-left .cartIcon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 3px;
}

.bar-right {
  font-size: 15px;
  color: #fff;
  line-height: 49px;
}

.bar-right .cart {
  background-color: #ffe817;
  color: #333;
}

.bar-right .buy {
  background-color: #f69;
}
</style>
