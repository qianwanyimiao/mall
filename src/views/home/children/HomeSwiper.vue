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
      <van-swipe-item class="home-swipe-item" v-for="item in banners" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </van-swipe-item>
    </van-swipe>
</template>
<script>
  //import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: 'HomeSwiper',
    components: {
      // Swiper,
      // SwiperItem
    },
    data () {
      return {};
    },
    props: {
      banners: {
        type: Array,
        default () {
          return []
        }
      }
    },
    //计算属性
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {},
    //生命周期 - 创建完成（可以访问当前this实例）
    created () {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted () {},
    //生命周期 - 更新之前
    updated () {},
    //生命周期 - 销毁完成
    destroyed () {},
    //如果页面有keep-alive缓存功能，这个函数会触发
    activated () {},
    }
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
