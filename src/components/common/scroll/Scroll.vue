<template>
  <!-- ref一般绑定给子组件 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { throttle } from "common/utils";

import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import ObserveDOM from "@better-scroll/observe-dom";
import ObserveImage from "@better-scroll/observe-image";
import MouseWheel from "@better-scroll/mouse-wheel";
BScroll.use(MouseWheel);
BScroll.use(ObserveImage);
BScroll.use(ObserveDOM);
BScroll.use(Pullup);

export default {
  // 用开源的better-scroll实现的滚动组件
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      // 检测滚动位置的类型，默认为0即不检测
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      // 上拉加载
      type: Boolean,
      default: false,
    },
    data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  watch: {
    // data数据一变化就刷新一下
    data() {
      setTimeout(this.refresh, 20);
    },
  },
  //方法集合
  methods: {
    scrollInit() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true, // 是否阻止原生click事件
        observeDOM: true, // 检测dom元素加载，但不能检测图片，需要和observeImage配合
        probeType: this.probeType,
        mouseWheel: true, // 开启鼠标滚轮滚动功能，默认为关闭
        pullUpLoad: this.pullUpLoad,
        // observeImage: true // 这个用于检测图片加载
      });
    },
    // 滚动到某个位置，滚动时间默认为300毫秒
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    // 监听滚动位置
    probeScroll() {
      if (this.probeType === 2 || this.probeType === 3) {
        // 使用节流函数封装
        const tc = throttle((position) => {
          // 设置0.1秒发出一次滚动事件信号，减少性能损耗
          this.$emit("scroll", position);
        }, 100);
        this.scroll.on("scroll", tc);
      }
    },
    // 上拉加载更多
    pullingUp() {
      if (this.pullUpLoad) {
        this.scroll.on("pullingUp", () => {
          this.$emit("pullingUp");
        });
      }
    },
    // 上拉加载结束
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    // 刷新滚动区域的高度
    refresh() {
      this.scroll && this.scroll.refresh();
    },
  },
  mounted() {
    // 初始化滚动组件
    this.scrollInit();
    // 监听滚动位置（如果设置了的话）
    this.probeScroll();
    // 监听上拉加载
    this.pullingUp();
  },
};
</script>
<style scoped>
.wrapper{
  overflow: hidden;
}
</style>
