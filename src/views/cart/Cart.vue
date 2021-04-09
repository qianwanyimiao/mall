<template>
  <div id="cart">
    <!-- 导航 -->
    <nav-bar class="cart-nav">
      <template v-slot:center=""><div>购物车( {{cartLength}} )</div></template>
    </nav-bar>
    <scroll  ref="scroll">
      <!-- 购物车商品列表 -->
      <cart-list class="content"></cart-list>
    </scroll>

    <!-- 价格汇总 -->
  </div>
</template>
<script>
  import Scroll from 'components/common/scroll/Scroll'
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './children/CartList'

  import { mapGetters } from "vuex";

  export default {
    name:'Cart',
    components:{
      NavBar,
      CartList,
      Scroll
    },
    data(){
      return{};
    },
    //计算属性
    computed:{
      // 可以这样将vuex里的getters映射到局部计算属性
      ...mapGetters({
        cartLength: 'cartLength'
      })
    },
    //监控data中的数据变化
    watch:{},
    //方法集合
    methods:{},
    //生命周期 - 创建之前
    beforeCreate(){},
    //生命周期 - 创建完成（可以访问当前this实例）
    created(){},
    //生命周期 - 挂载之前
    beforeMount(){},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted(){},
    //生命周期 - 更新之前
    beforeUpdate(){},
    //生命周期 - 更新之后
    updated(){},
    //生命周期 - 销毁之前
    beforeDestroy(){},
    //生命周期 - 销毁完成
    destroyed(){},
    //如果页面有keep-alive缓存功能，这个函数会触发
    activated(){
      this.$refs.scroll.refresh()
    },
    }
  </script>
<style scoped>
  #cart {
    height: 100vh;
  }
  .cart-nav {
    background-color: var(--color-tint);
    font-size: 5vw;
    color: #fff;
    position: relative;
    z-index: 9;
  }

  .content {
    height: calc(100% - 93px);
  }

</style>
