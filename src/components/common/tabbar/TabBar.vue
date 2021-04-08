<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name:'tabBar',
    components:{
    },
    data(){
      return{};
    },
    //计算属性
    computed:{},
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
    activated(){},
    }
  </script>
<style>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.1);
  }


</style>
