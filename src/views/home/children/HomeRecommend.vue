<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="首页推荐图片" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  // 首页推荐展示
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
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
