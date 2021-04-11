<template>
  <div class="check-button" :class="{ check: isChecked }">
    <img src="~assets/img/cart/tick.svg" alt="复选框背景" />
  </div>
</template>
<script>
export default {
  // 复选框按钮
  name: "CheckButton",
  props: {
    isChecked: {  //是否选中
      type: Boolean,
      default: true,
    },
  },
};
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
