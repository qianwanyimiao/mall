<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <!-- 商品标题 -->
    <div class="info-title">{{ goods.title }}</div>
    <!-- 商品价格 -->
    <div class="info-price">
      <span class="n-price"> {{ goods.newPrice }} </span>
      <span class="o-price"> {{ goods.oldPrice }} </span>
      <span v-if="goods.discount" class="discount"> {{ goods.discount }} </span>
    </div>
    <!-- 销量收藏等 -->
    <div class="info-other">
      <span> {{ goods.columns[0] }} </span>
      <span> {{ goods.columns[1] }} </span>
      <span> {{ goods.services[goods.services.length - 1].name }} </span>
    </div>
    <div>
      <!-- 该商品提供的服务 -->
      <div class="info-service">
        <span
          class="info-service-item"
          v-for="index in goods.services.length - 1"
          :key="index"
        >
          <img :src="goods.services[index - 1].icon" alt="商品服务图片" />
          <span> {{ goods.services[index - 1].name }} </span>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // 商品基本数据展示
  name: "DetailBaseInfo",
  props: {
    goods: {
      // 商品信息
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}

.info-title {
  color: #222;
  font-size: 4.5vw;
}

.info-price {
  margin-top: 10px;
}

.info-price .n-price {
  font-size: 6.5vw;
  color: var(--color-high-text);
}

.info-price .o-price {
  font-size: 3.5vw;
  margin-left: 5px;
  text-decoration: line-through;
}

.info-price .discount {
  font-size: 3.5vw;
  padding: 2px 5px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  margin-left: 5px;

  /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -8px;
}

.info-other {
  margin-top: 15px;
  line-height: 8vw;
  display: flex;
  font-size: 3.5vw;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  justify-content: space-between;
}

.info-service {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}

.info-service-item img {
  width: 3.7vw;
  height: 3.7vw;
  position: relative;
  top: 2px;
}

.info-service-item span {
  font-size: 3.5vw;
  color: #333;
}
</style>
