import {debounce} from 'common/utils'
import BackTop from 'components/content/backTop/BackTop'
import {BACKTOP_DISTANCE} from "./const"
import {POP, NEW, SELL} from "./const"
// 监听商品列表图片的刷新
export const itemListenerMixin = {
  data() {
    return {
      itemImageListener: null
    }
  },
  methods: {
    refresh () {
      // 用防抖函数封装，延迟300ms回调
      const refresh = debounce(this.$refs.scroll.refresh, 300)
      // 对监听事件进行保存
      this.itemImageListener = () => {
        refresh()
      }
      // 使用时间总线
      this.$bus.$on('itemImageLoad', this.itemImageListener)
    },
  },
  mounted() {
    this.refresh()
  }
}
// 返回顶部按钮
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false, //是否显示回到顶部按钮
    }
  },
  methods: {
    scrollToTop () {
      this.$refs.scroll.scrollTo(0, 0)
    },
    showBackTop (position) {
      this.isShowBackTop = (-position.y) > BACKTOP_DISTANCE
    },
  },
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}
