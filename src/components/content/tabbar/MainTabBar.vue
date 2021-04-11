<template>
  <tab-bar>
    <!-- 底部导航栏 -->
    <tab-bar-item path="/home">
      <template v-slot:item-icon="">
        <img src="~assets/img/tabbar/home.svg" alt="tabbar首页" />
      </template>

      <template v-slot:item-icon-active="">
        <img src="~assets/img/tabbar/home_active.svg" alt="tabbar首页" />
      </template>

      <template v-slot:item-text="">
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="deepPink">
      <template v-slot:item-icon="">
        <img src="~assets/img/tabbar/category.svg" alt="tabbar目录" />
      </template>

      <template v-slot:item-icon-active="">
        <img src="~assets/img/tabbar/category_active.svg" alt="tabbar目录" />
      </template>

      <template v-slot:item-text="">
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <template v-slot:item-icon="">
        <img src="~assets/img/tabbar/shopcart.svg" alt="tabbar购物车" />
      </template>

      <template v-slot:item-icon-active="">
        <img
          src="~assets/img/tabbar/shopcart_active.svg"
          alt="tabbar购物车被点击"
        />
      </template>

      <template v-slot:item-text="">
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template v-slot:item-icon="">
        <img src="~assets/img/tabbar/profile.svg" alt="tabbar个人界面" />
      </template>

      <template v-slot:item-icon-active="">
        <img
          src="~assets/img/tabbar/profile_active.svg"
          alt="tabbar个人界面被点击"
        />
      </template>

      <template v-slot:item-text="">
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  // 底部导航栏
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>
