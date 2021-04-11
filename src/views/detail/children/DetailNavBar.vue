<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <!-- 返回按钮 -->
      <template v-slot:left="">
        <div class="back" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="返回按钮" />
        </div>
      </template>
      <!-- 详情页导航，分为四个部分 -->
      <template v-slot:center="">
        <div class="title">
          <div
            class="title-item"
            v-for="(item, index) in titles"
            :key="item"
            :class="{ active: index === currentIndex }"
            @click="titleClick(index)"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  // 详情页导航
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"], // 导航四个部分
      currentIndex: 0,  // 当前显示详情页区域
    };
  },
  //方法集合
  methods: {
    // 最上面的导航
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    // 返回按钮
    backClick() {
      this.$router.back();
    },
  },
};
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
