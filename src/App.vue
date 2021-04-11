<template>
  <div id="app">
    <!-- 详情页不需要缓存 -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/tabbar/MainTabBar'

  export default {
    name: 'App',
    components: {
      MainTabBar
    }

  }
</script>

<style>
  @import 'assets/css/base.css';
</style>
