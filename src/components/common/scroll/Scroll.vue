<template>
  <!-- ref一般绑定给子组件 -->
  <div class='wrapper' ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import BScroll from '@better-scroll/core'
  import Pullup from '@better-scroll/pull-up'
  import ObserveDOM from '@better-scroll/observe-dom'
  import ObserveImage from '@better-scroll/observe-image'
  import MouseWheel from '@better-scroll/mouse-wheel'
  BScroll.use(MouseWheel)
  BScroll.use(ObserveImage)
  BScroll.use(ObserveDOM)
  BScroll.use(Pullup)

  export default {
    name: 'Scroll',
    components: {
    },
    data () {
      return {
        scroll: null,
      };
    },
    props: {
      probeType: {
        type: Number,
        default: 0,
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    //计算属性
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      scrollInit () {
        this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        observeDOM: true,
        probeType: this.probeType,
        mouseWheel: true,
        pullUpLoad: this.pullUpLoad
      })
      },
      // 滚动到某个位置，滚动时间默认为300毫秒
      scrollTo (x, y, time=300) {
        this.scroll.scrollTo(x, y, time)
      },
      // 监听滚动位置
      probeScroll () {
        this.scroll.on('scroll', position => {
          this.$emit('scroll', position)
        })
      },
      // 上拉加载更多
      pullingUp () {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      },
      // 上拉加载结束
      finishPullUp () {
        this.scroll.finishPullUp()
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created () {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted () {
      this.scrollInit()
      this.probeScroll()
      this.pullingUp()

    },
    //生命周期 - 更新之前
    updated () {},
    //生命周期 - 销毁完成
    destroyed () {},
    //如果页面有keep-alive缓存功能，这个函数会触发
    activated () {},
    }
  </script>
<style scoped>
</style>
