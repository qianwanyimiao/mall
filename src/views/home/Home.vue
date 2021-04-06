<template>
  <div id="home">
    <!-- 首页导航栏 -->
    <nav-bar class="home-nav">
      <template v-slot:center=""><div>商城</div></template>
    </nav-bar>
    <!-- 首页轮播图 -->
    <scroll class="content"
    ref="scroll"
    :probe-type="3"
    :pull-up-load="true"
    @scroll='contentScroll'
    @pullingUp='loadMore'
    >
      <home-swiper :banners="banners"></home-swiper>
      <!-- 首页推荐栏 -->
      <home-recommend :recommends="recommends"></home-recommend>
      <!-- 本周流行 -->
      <popular-view></popular-view>
      <!-- 商品列表导航栏 -->
      <tab-control class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabClick='tabClick'
      >
      </tab-control>
      <!-- 商品列表 -->
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="scrollToTop" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'


  import HomeSwiper from './children/HomeSwiper'
  import HomeRecommend from './children/HomeRecommend'
  import PopularView from './children/PopulerView'


  import * as homeApi from 'network/home'
  export default {
    name:'Home',
    components:{
      NavBar,
      TabControl,
      HomeSwiper,
      HomeRecommend,
      PopularView,
      GoodsList,
      Scroll,
      BackTop
    },
    data () {
      return{
        banners: [], // 首页轮播图
        recommends: [], // 首页推荐
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},

        },
        currentType: 'pop',
        isShowBackTop: false
      };
    },
    //计算属性
    computed:{
      showGoods () {
        return this.goods[this.currentType].list
      }
    },
    //监控data中的数据变化
    watch:{},
    //方法集合
    methods:{
      /**
       * 事件监听相关方法
       */
      tabClick (index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      scrollToTop () {
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll (position) {
        this.isShowBackTop = (-position.y) > 1000
      },
      // 上拉触发加载更多
      loadMore () {
        this.getHomeGoods(this.currentType)
      },
      /**
       * 网络请求相关方法
       */

      // 获取轮播图和推荐列表数据
      getHomeMultidata () {
        homeApi.getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })},
      // 在初始化和用户下拉刷新时请求商品列表数据
      getHomeGoods (type) {
        const page = this.goods[type].page + 1
        homeApi.getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
      })
      }
    },
    //生命周期 - 创建之前
    beforeCreate(){},
    //生命周期 - 创建完成（可以访问当前this实例）
    created(){
      // 1.请求多个数据
      this.getHomeMultidata()
      // 请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    //生命周期 - 挂载之前
    beforeMount(){},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted(){},
    //生命周期 - 更新之前
    beforeUpdate(){},
    //生命周期 - 更新之后
    updated(){},
    //生命周期 - 销毁之前
    beforeDestroy(){},
    //生命周期 - 销毁完成
    destroyed(){},
    //如果页面有keep-alive缓存功能，这个函数会触发
    activated(){},
    }
  </script>
<style scoped>
  #home {
    height: 100vh;
    padding-top: 44px;
    padding-bottom: 49px;
  }

  .home-nav {
    background-color: var(--color-tint);
    font-size: 5vw;
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  .content {
    height: 100%;
    overflow: hidden;
  }

</style>
