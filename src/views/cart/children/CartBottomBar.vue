<template>
  <div class='bottom-bar'>
    <div class="left">
      <check-button
      class="check-button"
      :is-checked='isSelectAll'
      @click.native="selectAll"></check-button>
      <span>全选</span>
    </div>
    <div class="price">
      合计: ￥{{totalPrice}}
    </div>
    <span class="calculate">去结算: ({{total}})</span>
  </div>
</template>
<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  import { mapGetters } from "vuex";
  export default {
    name: 'CartBottomBar',
    components: {
      CheckButton
    },
    data () {
      return {};
    },
    props: {},
    //计算属性
    computed: {
      ...mapGetters(['cartList']),
      // 选中的商品总价格
      totalPrice () {
        return this.cartList.filter(item => {
          return item.checked
        }).reduce((pre, item) => {
          return item.price * item.count + pre
        }, 0).toFixed(2)
      },
      // 选中的商品总数
      total () {
        return this.cartList.filter(item => {
          return item.checked
        }).reduce((pre, item) => {
          return item.count + pre
        }, 0)
      },
      // 是否全选
      isSelectAll () {
        return this.cartList.length !== 0 &&
        !this.cartList.some((item)=> {
          return !item.checked
        })
      }
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      // 点击全选按钮
      selectAll () {
        if(this.isSelectAll){
          for(let item of this.cartList){
            item.checked = false
          }
        }else {
          this.cartList.forEach(item => item.checked = true)
        }
        // this.cartList.forEach(item => item.checked = !this.isSelectAll);
      },
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
  .bottom-bar {
    position: relative;
    display: flex;
    height: 40px;
    line-height: 40px;
    background-color: #eee;
  }

  .left {
    height: inherit;
    display: flex;
    align-items: center;
    padding: 5px;
    margin-right: 8vw;
  }
  .check-button {
    width: 5vw;
    height: 5vw;
    line-height: 5vw;
    margin-right: 2vw;
  }

  .calculate {
    padding: 0 1vw;
    margin-left: auto;
    background-color: var(--color-tint);
    color: #fff;
  }

</style>
