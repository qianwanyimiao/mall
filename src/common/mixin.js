import {debounce} from 'common/utils'

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
      this.$bus.$on('itemImageLoad', this.itemImageListener)
    },
  },
  mounted() {
    this.refresh()
  }
}
