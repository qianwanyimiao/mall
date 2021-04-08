<template>
  <div>
    <van-swipe
    class="detail-swiper"
    :autoplay="3000"
    indicator-color="white"
    >
      <van-swipe-item class="detail-swiper-item"
      v-for="item in topImages"
      :key="item"
      >
        <img :src="item" @click="imagePreview(item)" alt="详情页图片">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
  import {ImagePreview} from 'vant'
  export default {
    name: 'DetailSwiper',
    components: {

    },
    data () {
      return {};
    },
    props: {
      topImages: {
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
    methods: {
      // 因为轮播的图片太大放不下，所以先截取一部分展示，
      // 点击图片后再预览整张图片，这里是使用了vant的预览图片组件
      imagePreview (src) {
        ImagePreview({
          images:[src],
        });
      }
    },
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
