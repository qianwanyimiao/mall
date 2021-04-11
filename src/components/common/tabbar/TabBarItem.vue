<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <!-- 被点击后显示这个el -->
    <div v-if="isActive"><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  // 底部导航栏子组件
  name: "TabBarItem",
  data() {
    return {
      // isActive: false,
    };
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red", // 导航栏元素默认为红色
    },
  },
  //计算属性
  computed: {
    isActive() {  // 是否被选中
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() { // 选中后的样式（只是改变颜色）
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
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
  background-color: rgb(236, 236, 236);
}
</style>
