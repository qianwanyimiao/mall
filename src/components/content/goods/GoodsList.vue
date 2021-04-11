  <template>
  <div class="goods-list">
    <goods-list-item
      v-for="(item, index) in goods"
      :key="index"
      :goods-item="item"
    >
    </goods-list-item>
  </div>
</template>
<script>
import GoodsListItem from "./GoodsListItem";

export default {
  // 商品列表
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {  // 商品列表里的商品数据
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
