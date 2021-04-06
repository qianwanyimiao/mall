<template>
  <div class='goods-list'>
    <goods-list-item
    v-for="item in goods"
    :key="item.acm"
    :goods-item="item"
    >
    </goods-list-item>
  </div>
</template>
<script>
  import GoodsListItem from './GoodsListItem'

  export default {
    name: 'GoodsList',
    components: {
      GoodsListItem
    },
    data () {
      return {};
    },
    props: {
      goods: {
        type: Array,
        default() {
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
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
