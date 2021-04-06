<template>
  <div class='recommend'>
    <div class="recommend-item" v-for="item in recommends" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="首页推荐图片">
        <div> {{item.title}} </div>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    components: {
    },
    data () {
      return {};
    },
    props: {
      recommends: {
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
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 3.5vw;
    padding: 10px 0 15px;
    border-bottom: 8px solid #eee;
  }

  .recommend-item {
    flex: 1;
  }

  .recommend-item img {
    width: 80%;
  }
</style>
