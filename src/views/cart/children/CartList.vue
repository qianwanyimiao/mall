<template>
  <div class='cart-list'>
    <cart-list-item
    class="cart-list-item"
    v-for="item in cartList"
    :key="item.iid"
    :itemInfo='item'
    >
    </cart-list-item>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import CartListItem from './CartListItem'

  export default {
    name: 'CartList',
    components: {
      CartListItem
    },
    data () {
      return {};
    },
    props: {},
    //计算属性
    computed: {
      ...mapGetters({
        cartList:'cartList'
      })
    },
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
  .cart-list-item {
    width: 100vw;
  }
</style>
