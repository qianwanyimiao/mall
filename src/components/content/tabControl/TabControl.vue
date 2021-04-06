<template>
  <div class='tab-control'>
    <div v-for="(item, index) in titles"
    class="tab-control-item"
    :class="{active: index === currentIndex}"
    :key="item"
    @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TabControl',
    components: {
    },
    data () {
      return {
        currentIndex: 0,
      };
    },
    props: {
      titles: {
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
    methods: {
      itemClick (index) {
        this.currentIndex = index
        this.$emit('tabClick', index)
      }
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
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 4.2vw;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }

  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active span{
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-tint);
  }
</style>
