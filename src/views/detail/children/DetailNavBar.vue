<template>
  <div class='detail-nav-bar'>
    <nav-bar>
      <template v-slot:left="">
        <div class="back" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="返回按钮">
        </div>
      </template>
      <template v-slot:center="">
        <div class="title">
          <div class="title-item"
          v-for="(item, index) in titles"
          :key="item"
          :class="{active: index === currentIndex}"
          @click="titleClick(index)"
          >
            {{item}}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: 'DetailNavBar',
    components: {
      NavBar
    },
    data () {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0,
      };
    },
    props: {},
    //计算属性
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      // 最上面的导航
      titleClick (index) {
        this.currentIndex = index
        this.$emit('titleClick', index)
      },
      // 返回按钮
      backClick () {
        this.$router.back()
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
  .title {
    display: flex;
  }

  .title-item {
    font-size: 4vw;
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
  }

  .back {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .back img {
    /* 在back里居中 */
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
</style>
