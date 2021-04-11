<template>
  <div>
    <van-swipe class="detail-swiper" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        class="detail-swiper-item"
        v-for="item in topImages"
        :key="item"
      >
        <img :src="item" @click="imagePreview(item)" alt="详情页图片" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { ImagePreview } from "vant";
export default {
  name: "DetailSwiper",

  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  //方法集合
  methods: {
    // 因为轮播的图片太大放不下，所以先截取一部分展示，
    // 点击图片后再预览整张图片，这里是使用了vant的预览图片组件
    imagePreview(src) {
      ImagePreview({
        images: [src],
      });
    },
  },
};
</script>
<style scoped>
.detail-swiper-item {
  width: 100%;
  flex-shrink: 0;
  height: 35vh;
  overflow: hidden;
}

.detail-swiper-item img {
  width: 100vw;
}
</style>
