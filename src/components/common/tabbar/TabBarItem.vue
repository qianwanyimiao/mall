<template>

  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-if='isActive'><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>

  </div>

</template>

<script>
  export default {
    name: 'TabBarItem',
    components: {

    },
    data(){
      return{
        // isActive: false,
      };
    },

    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red', // 导航栏元素默认为红色
      }
    },
    //计算属性
    computed:{
      isActive () {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle () {
        return this.isActive ?
        {color: this.activeColor} : {}
      }
    },
    //监控data中的数据变化
    watch:{},
    //方法集合
    methods:{
      itemClick () {
        this.$router.replace(this.path)
      }
    },

  }
</script>

<style >
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

.tab-bar-item:active {
  background-color: rgb(236, 236, 236);
}
.tab-bar-item:hover {
  background-color:rgb(236, 236, 236);
}

</style>
