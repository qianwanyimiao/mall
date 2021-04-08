<template>
  <div id='detail'>
    <!-- 导航栏 -->
    <detail-nav-bar
    ref="nav"
    class="detail-nav"
    @titleClick='titleClick'></detail-nav-bar>
    <scroll
    class="content"
    ref="scroll"
    :probe-type="3"
    @scroll="contentScroll"
    >
      <!-- 轮播图 -->
    <detail-swiper :top-images='topImages'></detail-swiper>
    <!-- 商品基本信息 -->
    <detail-base-info :goods="goods"></detail-base-info>
    <!-- 商家信息 -->
    <detail-shop-info :shop='shop'></detail-shop-info>
    <!-- 商品详情信息 -->
    <detail-goods-info :detail-info="detailInfo" @imageLoad='imageLoad'></detail-goods-info>
    <!-- 商品参数信息 -->
    <detail-param-info ref="params" :param-info='paramInfo'></detail-param-info>
    <!-- 评论信息 -->
    <detail-comment-info ref="comment" :comment-info='commentInfo'></detail-comment-info>
    <!-- 推荐信息 -->
    <goods-list ref="recommend" :goods='recommends'></goods-list>
    </scroll>
  </div>
</template>
<script>
  import DetailNavBar from './children/DetailNavBar'
  import DetailSwiper from './children/DetailSwiper'
  import DetailBaseInfo from './children/DetailBaseInfo'
  import DetailShopInfo from './children/DetailShopInfo'
  import DetailGoodsInfo from './children/DetailGoodsInfo'
  import DetailParamInfo from './children/DetailParamInfo'
  import DetailCommentInfo from './children/DetailCommentInfo'

  import Scroll from "components/common/scroll/Scroll";
  import GoodsList from 'components/content/goods/GoodsList'

  import { getDetail, getRecommend, Goods, Shop, GoodsParam} from "network/detail";

  import {itemListenerMixin} from 'common/mixin'

  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList
    },
    mixins: [itemListenerMixin],
    data () {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends:[],
        itemImageListener: null,
        areaTopY:[], // 参数，评论等区域距离顶部的高度
        currentIndex: 0,
      };
    },
    props: {},
    //计算属性
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      // 根据iid向后端请求数据
      getDetail () {
        getDetail(this.iid).then(res => {
          console.log(res);
          const data = res.result
          // 1.获取顶部轮播图数据
          this.topImages = res.result.itemInfo.topImages
          // 2.获取商品信息
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
          // 3.获取商家信息
          this.shop = new Shop(data.shopInfo)
          // 4.获取商品的详情数据
          this.detailInfo = data.detailInfo
          // 5.获取商品参数信息
          this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
          // 6.获取评论信息
          if(data.rate.cRate !== 0){  // 可能没有评论信息，要做判断
            this.commentInfo = data.rate.list[0]
          }
      })
      },
      // 请求推荐数据
      getRecommend () {
        getRecommend().then(res => {
          this.recommends = res.data.list
        })
      },
      // 详情图片加载完就刷新滚动区域高度
      imageLoad () {
        this.$refs.scroll.refresh()

        this.areaTopY = []
        this.areaTopY.push(0)
        this.areaTopY.push(this.$refs.params.$el.offsetTop)
        this.areaTopY.push(this.$refs.comment.$el.offsetTop)
        this.areaTopY.push(this.$refs.recommend.$el.offsetTop)
        console.log(this.areaTopY);
      },
      // 点击导航跳到详情页相应位置
      // 需要减去导航栏高度44px
      titleClick (index) {
        this.$refs.scroll.scrollTo(0, -(this.areaTopY[index] - 44), 200)
      },

      contentScroll (position) {
        // 1.获取y坐标
        const positionY = -position.y
        // 2. 判断当前所在区域
        let length = this.areaTopY.length;
        for(let i = 0; i < length; i++){
          if(this.currentIndex !== i &&
          ((i < length - 1 && positionY >= this.areaTopY[i] && positionY < this.areaTopY[i + 1])
          || (i === length - 1 && positionY >= this.areaTopY[i]))){
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
        }
        }

      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created () {
      // 1.保存iid
      this.iid = this.$route.params.iid
      // 2.根据iid请求数据
      this.getDetail()
      // 3.请求推荐数据
      this.getRecommend()
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted () {},
    //生命周期 - 更新之前
    updated () {},
    //生命周期 - 销毁完成
    destroyed () {},
    //如果页面有keep-alive缓存功能，这个函数会触发
    activated () {},
    }
  </script>
<style scoped>
  #detail {
    position: relative;
    z-index: 11;
    background-color: #fff;
    height: 100vh;
  }

  .content {
    height: calc(100% - 44px);
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>
