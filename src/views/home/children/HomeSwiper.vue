<template>
  <!-- vue手写 -->
  <!-- <swiper>
      <swiper-item v-for="item in banners" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" alt="广告图片">
        </a>
      </swiper-item>
    </swiper> -->
  <!-- 使用vant -->
  <van-swipe class="home-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item
      class="home-swipe-item"
      v-for="item in banners"
      :key="item.acm"
    >
      <a :href="item.link">
        <img :src="item.image" alt="广告图片" @load="imageLoad" />
      </a>
    </van-swipe-item>
  </van-swipe>
</template>
<script>
//import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  // 首页轮播图
  name: "HomeSwiper",
  components: {
    // Swiper,
    // SwiperItem
  },
  data() {
    return {
      isLoad: false, // 是否加载完轮播图片
    };
  },
  props: {
    banners: {
      // 轮播图数据
      type: Array,
      default() {
        return [];
      },
    },
  },
  //方法集合
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        // 使用isLoad进行状态记录，防止发出多次事件
        this.$emit("swiperImageLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style scoped>
.home-swipe-item {
  width: 100%;
  flex-shrink: 0;
}

.home-swipe-item img {
  width: 100%;
}
</style>
