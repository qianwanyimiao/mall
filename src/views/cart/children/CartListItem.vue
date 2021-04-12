<template>
  <div id="shop-item">
    <div class="item-selector">
      <!-- 复选框 -->
      <check-button
        @click.native="checkedChange"
        :is-checked="itemInfo.checked"
      ></check-button>
    </div>
    <!-- 商品图片 -->
    <div class="item-img return">
      <img :src="itemInfo.image" alt="商品图片" @click='goToDetail'/>
    </div>
    <!-- 商品基本信息 -->
    <div class="item-info">
      <div class="item-title return" @click='goToDetail'>{{ itemInfo.title }}</div>
      <div class="item-desc">商品描述: {{ itemInfo.desc }}</div>
      <div class="size-desc">选中规格:
        <span
          class="size-item"
          v-for="(item, index) in itemInfo.count_size"
          :key="index"
        >
        {{item[0]}}: x{{item[1]}}
        </span>
      </div>
      <div class="info-bottom">
        <div class="item-price left">¥{{ itemInfo.price }}</div>
        <div class="item-count right">x{{ itemInfo.count }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import CheckButton from "components/content/checkButton/CheckButton";

export default {
  // 购物车商品组件
  name: "CartListItem",
  components: {
    CheckButton,
  },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    // 复选框点击
    checkedChange() {
      this.itemInfo.checked = !this.itemInfo.checked;
    },
    // 点击图片或者商品标题可跳转到对应商品详情页
    goToDetail(){
      this.$goTo("/detail/" + this.itemInfo.iid);
    }
  },
};
</script>
<style scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-selector {
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}

.item-img img {
  width: 20vw;
  height: 100%;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.size-desc {
  font-size: 12px;
  font-weight: 600;
  color: #333;
  padding-top: 5px;
}

.size-item {
  margin-right: 4px;
}

.info-bottom {
  width: 100%;
  position: absolute;
  bottom: 0;
  padding-right: 20px;

}

.info-bottom .item-price {
  color: orangered;
}

</style>
