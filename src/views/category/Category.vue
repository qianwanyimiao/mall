<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <template v-slot:center="">
        <div>商品分类</div>
      </template>
    </nav-bar>
    <div class="content">
      <!-- 左边的分类栏 -->
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>
      <!-- 右边的详细分类 -->
      <scroll id="tab-content" :data="[categoryData]">
        <div>
          <tab-content-category
            :subcategories="showSubcategory"
          ></tab-content-category>
          <!-- 和首页一样的三个分类排行 -->
          <tab-control
            :titles="['综合', '新品', '销量']"
            @itemClick="tabClick"
          ></tab-control>
          <!-- 排行里的商品信息 -->
          <tab-content-detail
            :category-detail="showCategoryDetail"
          ></tab-content-detail>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabContentCategory from "./children/TabContentCategory";
import TabContentDetail from "./children/TabContentDetail";
import TabMenu from "./children/TabMenu";
import TabControl from "components/content/tabControl/TabControl";
import Scroll from "components/common/scroll/Scroll";

import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "network/category";
// 引入常量
import { POP, SELL, NEW } from "common/const";
import { tabControlMixin } from "common/mixin";

export default {
  name: "Category",
  components: {
    NavBar,
    TabMenu,
    TabControl,
    Scroll,
    TabContentCategory,
    TabContentDetail,
  },
  // 混入
  mixins: [tabControlMixin],
  data() {
    return {
      categories: [], // 目录信息
      categoryData: {}, // 目录里的数据
      currentIndex: -1, // 当前显示的目录
    };
  },
  created() {
    // 1.请求分类数据
    this._getCategory();
  },
  computed: {
    // 子目录数据
    showSubcategory() {
      if (this.currentIndex === -1) return {};
      return this.categoryData[this.currentIndex].subcategories;
    },
    // 三个分类排行的商品数据
    showCategoryDetail() {
      if (this.currentIndex === -1) return [];
      return this.categoryData[this.currentIndex].categoryDetail[
        this.currentType
      ];
    },
  },
  methods: {
    // 获取分类数据
    _getCategory() {
      getCategory().then((res) => {
        // 1.获取分类数据
        this.categories = res.data.category.list;
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: [],
            },
          };
        }
        // 3.默认请求第一个分类的数据
        this._getSubcategories(0);
      });
    },
    // 获取某个分类数据
    _getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then((res) => {
        this.categoryData[index].subcategories = res.data;
        this.categoryData = { ...this.categoryData };
        this._getCategoryDetail(POP);
        this._getCategoryDetail(SELL);
        this._getCategoryDetail(NEW);
      });
    },
    // 获取排行榜里的商品数据
    _getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then((res) => {
        // 3.将获取的数据保存下来
        this.categoryData[this.currentIndex].categoryDetail[type] = res;
        this.categoryData = { ...this.categoryData };
      });
    },
    /**
     * 事件响应相关的方法
     */
    // 选中哪个分类
    selectItem(index) {
      this._getSubcategories(index);
    },
  },
};
</script>

<style scoped>
#category {
  height: 100vh;
}

.nav-bar {
  position: relative;
  background-color: var(--color-tint);
  color: #fff;
  z-index: 9;
}

.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;

  display: flex;
}

#tab-content {
  height: 100%;
  flex: 1;
}
</style>
