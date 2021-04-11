<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
// 顶部导航栏
export default {
  name: "NavBar",
};
</script>
<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  text-align: center;
  line-height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
/* 以下是用flex布局实现左右固定，中间自适应布局 */
.left,
.right {
  width: 60px;
}

.center {
  flex: 1;
}
</style>
