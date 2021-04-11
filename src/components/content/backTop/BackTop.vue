<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="回到顶部" />
  </div>
</template>
<script>
export default {
  // 返回顶部按钮
  name: "BackTop",
};
</script>
<style scoped>
.back-top {
  position: fixed;
  z-index: 100;
  right: 2vw;
  bottom: 7vh;
}

.back-top img {
  width: 13vw;
  height: 13vw;
}
</style>
