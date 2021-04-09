<template>
  <div id="home">
    <!-- 首页导航栏 -->
    <nav-bar class="home-nav">
      <template v-slot:center=""><div>商城</div></template>
    </nav-bar>
    <!-- 商品列表导航栏 (默认不显示，到了下面那个导航栏的位置再显示并盖住它，
    形成一个吸顶的假象)-->
    <tab-control class="tab-control"
    ref="tabControlCopy"
    :titles="['流行', '新款', '精选']"
    @tabClick='tabClick'
    v-show="isTabFixed"
    >
    </tab-control>

    <scroll class="content"
    ref="scroll"
    :probe-type="2"
    :pull-up-load="true"
    @scroll='contentScroll'
    @pullingUp='loadMore'
    >
      <!-- 首页轮播图 -->
      <home-swiper
      :banners="banners"
      @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <!-- 首页推荐栏 -->
      <home-recommend :recommends="recommends"></home-recommend>
      <!-- 本周流行 -->
      <popular-view></popular-view>
      <!-- 商品列表导航栏 -->
      <tab-control
      ref="tabControl"
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

  import HomeSwiper from './children/HomeSwiper'
  import HomeRecommend from './children/HomeRecommend'
  import PopularView from './children/PopulerView'

  import * as homeApi from 'network/home'
  import {NEW, POP, SELL} from "common/const"
  import {debounce} from 'common/utils'
  import {itemListenerMixin, backTopMixin} from 'common/mixin'

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
    },
    mixins:[itemListenerMixin, backTopMixin],
    data () {
      return{
        banners: [], // 首页轮播图
        recommends: [], // 首页推荐
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},

        },
        currentType: POP,
        isTabFixed:false, // 是否显示tabControl吸顶效果
        tabOffsetTop: 0,
        saveY:0,
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
      // 获取所有图片后刷新可滚动区域高度
      // 改用混入代码实现
      refresh () {
        // 用防抖函数封装，延迟300ms回调
        const refresh = debounce(this.$refs.scroll.refresh, 300)
        // 对监听事件进行保存
        this.itemImageListener = () => {
          refresh()
        }
        this.$bus.$on('itemImageLoad', this.itemImageListener)
      },
      /**
       * 事件监听相关方法
       */
      // tabControl选择哪个子列表
      tabClick (index) {
        // 因为有两个tabControl组件，所以在点击子目录之后要同步更新两个
        // 组件的currentIndex
        this.$refs.tabControlCopy.currentIndex = index
        this.$refs.tabControl.currentIndex = index
        switch (index) {
          case 0:
            this.currentType = POP
            break
          case 1:
            this.currentType = NEW
            break
          case 2:
            this.currentType = SELL
            break
        }
      },

      // 监听当前滚动到哪个位置
      contentScroll (position) {
        // 1.判断当前滚动到顶部按钮是否显示，y坐标小于-1000才显示此按钮
        // 这个函数在混入函数内定义
        this.showBackTop(position)
        // 2.决定tabControl组件是否吸顶（position：fixed）
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      // 上拉触发加载更多
      loadMore () {
        this.getHomeGoods(this.currentType)
      },
      swiperImageLoad () {
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
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
          // 上拉加载完成需要调用这个函数，不然下一次不能加载
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
      this.getHomeGoods(POP)
      this.getHomeGoods(NEW)
      this.getHomeGoods(SELL)

    },
    //生命周期 - 挂载之前
    beforeMount(){},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted(){
      // 监听item中的图片加载完成后刷新
      // 使用混入代码实现
      // this.refresh()
    },
    //生命周期 - 更新之前
    beforeUpdate(){},
    //生命周期 - 更新之后
    updated(){},
    //生命周期 - 销毁之前
    beforeDestroy(){},
    //生命周期 - 销毁完成
    destroyed(){
    },
    //如果页面有keep-alive缓存功能，这个函数会触发
    activated(){
      // 回到上次浏览的位置
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0, this.saveY, 0)

    },
    deactivated () {
      // 因为betterscroll低版本的原因，路由切换时不会保留滚动的位置，
      // 所以需要手动记录
      this.saveY = this.$refs.scroll.y

      // 在离开路由的时候，取消全局事件的监听
      this.$bus.$off('itemImageLoad', this.itemImageListener)
    }
    }
  </script>
<style scoped>
  #home {
    height: 100vh;
    padding-bottom: 49px;
  }

  .home-nav {
    background-color: var(--color-tint);
    font-size: 5vw;
    color: #fff;
    /* 使用原生滚动才需要fixed */
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }

  .tab-control {
    /* 不知道为什么有一个空格的间隙 */
    top: -1px;
    position: relative;
    z-index: 9;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
    overflow: hidden;
  }


</style>
