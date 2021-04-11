<template>
  <grid-view>
    <!-- 两栏网格布局 -->
    <goods-list-item
      v-for="(item, index) in categoryDetail"
      :key="index"
      :goods-item="item"
    ></goods-list-item>
  </grid-view>
</template>

<script>
import GridView from "components/common/gridView/GridView";
import GoodsListItem from "components/content/goods/GoodsListItem";

export default {
  // 排行榜列表
  name: "TabContentDetail",
  components: {
    GridView,
    GoodsListItem,
  },
  props: {
    categoryDetail: { // 排行榜里的商品数据
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
</style>
