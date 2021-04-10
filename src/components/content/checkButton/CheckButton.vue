<template>
  <div class='check-button' :class="{check: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="复选框背景">
  </div>
</template>
<script>
  export default {
    name: 'CheckButton',
    components: {
    },
    data () {
      return {};
    },
    props: {
      isChecked: {
        type: Boolean,
        default: true
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
  .check-button {
    border-radius: 50%;
    border: 1px solid #aaa;
    background-color: #aaa;
  }

  .check {
    background-color: var(--color-tint);
    border-color: var(--color-tint);
  }
</style>
