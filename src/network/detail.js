import { request } from "./request";
// 请求商品详情信息
export function getDetail (iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
// 请求商品评论信息
export function getRecommend () {
  return request({
    url: '/recommend'
  })
}
// 封装商品信息
export class Goods {
  // itemInfo存储商品信息，columns存储销量，收藏等，services存储商品服务
  constructor (itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}
// 封装购物车所需要的信息
export class Shop {
  constructor (shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}
// 封装商品参数信息
export class GoodsParam {
  constructor (info, rule) {
    // image可能没有值
    this.image = info.image ? info.image[0] : ''
    this.infos = info.set
    this.sizes = rule !== undefined ? rule.tables : {}
  }
}
