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
      probeType: {  // 检测滚动位置的类型，默认为0即不检测
        type: Number,
        default: 0,
      },
      pullUpLoad: { // 上拉加载
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
        click: true,  // 是否阻止原生click事件
        observeDOM: true, // 检测dom元素加载，但不能检测图片，需要和observeImage配合
        probeType: this.probeType,
        mouseWheel: true, // 开启鼠标滚轮滚动功能，默认为关闭
        pullUpLoad: this.pullUpLoad,
        // observeImage: true // 这个用于检测图片加载
      })
      },
      // 滚动到某个位置，滚动时间默认为300毫秒
      scrollTo (x, y, time=300) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      // 监听滚动位置
      probeScroll () {
        if(this.probeType === 2 || this.probeType === 3){
          this.scroll.on('scroll', position => {
          this.$emit('scroll', position)
        })
        }
      },
      // 上拉加载更多
      pullingUp () {
        if(this.pullUpLoad) {
          this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
        }
      },
      // 上拉加载结束
      finishPullUp () {
        this.scroll.finishPullUp()
      },
      // 刷新滚动区域的高度
      refresh () {
        this.scroll && this.scroll.refresh()
      },
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
