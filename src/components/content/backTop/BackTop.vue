<template>
  <div class='back-top'>
    <img src="~assets/img/common/top.png" alt="回到顶部">
  </div>
</template>
<script>
  export default {
    name: 'BackTop',
    components: {
    },
    data () {
      return {};
    },
    props: {},
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
  .back-top {
    position: fixed;
    z-index: 100;
    right: 2vw;
    bottom: 7vh;
  }

  .back-top img{
    width: 13vw;
    height: 13vw;
  }
</style>
