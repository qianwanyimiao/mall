<template>
  <div class="goods-item" @click="itemClick">
    <!-- 使用图片懒加载就用v-lazy替换：src-->
    <img :src="showImage" alt="商品图片" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price"> ￥ {{ goodsItem.price }} </span>
      <span class="collect"> {{ goodsItem.cfav }} </span>
    </div>
  </div>
</template>
<script>
export default {
  // 商品列表子组件
  name: "GoodsListItem",
  props: {
    goodsItem: {  // 商品数据
      type: Object,
      defaults() {
        return {};
      },
    },
  },
  //计算属性
  computed: {
    // 详情页推荐图片数据在image里，首页在show.image，分类在img里
    showImage() {
      return (
        this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
      );
    },
  },
  methods: {
    imageLoad() {
      // 也可以直接取消离开首页后首页的全局事件监听
      this.$bus.$emit("itemImageLoad");
    },
    // 跳转详情页
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
};
</script>
<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48vw;
}
.goods-item img {
  width: 100%;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}
/* 用伪元素画收藏图标 */
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
