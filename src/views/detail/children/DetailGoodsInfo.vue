<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <!-- 商品的一些补充描述 -->
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <!-- 商品详情图片 -->
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :src="item"
        :key="index"
        alt="商品详情图片"
        @load="imgLoad"
      />
    </div>
  </div>
</template>
<script>
export default {
  // 商品详情信息展示
  name: "DetailGoodsInfo",
  data() {
    return {
      counter: 0, // 已加载图片的个数
      imageTotal: 0, // 图片总数
    };
  },
  props: {
    detailInfo: {
      // 商品详情信息
      type: Object,
      default() {
        return {};
      },
    },
  },
  //监控data中的数据变化
  watch: {
    detailInfo() {
      // 监听传过来的图片的总数
      this.imageTotal = this.detailInfo.detailImage[0].list.length;
    },
  },
  //方法集合
  methods: {
    imgLoad() {
      if (++this.counter === this.imageTotal) {
        this.$emit("imageLoad");
      }
    },
  },
};
</script>
<style scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.info-desc {
  padding: 0 15px;
}

.info-desc .start,
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.info-desc .end::after {
  right: 0;
}

.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}

.info-key {
  margin: 20px 0 10px 15px;
  color: #333;
  font-size: 15px;
}

.info-list img {
  width: 100%;
}
</style>
