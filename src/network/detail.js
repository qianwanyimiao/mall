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
    this.title = itemInfo.title // 标题
    this.desc = itemInfo.desc // 商品描述
    this.newPrice = itemInfo.price  // 商品现在的价格
    this.oldPrice = itemInfo.oldPrice // 之前的价格
    this.discount = itemInfo.discountDesc // 折扣
    this.columns = columns  // 销量，收藏等
    this.services = services  // 商品服务
    this.realPrice = itemInfo.lowNowPrice // 为了方便取当前最低价
  }
}
// 封装商家信息
export class Shop {
  constructor (shopInfo) {
    this.logo = shopInfo.shopLogo // 商家logo
    this.name = shopInfo.name // 店名
    this.fans = shopInfo.cFans  // 粉丝数
    this.sells = shopInfo.cSells  // 卖出商品数当
    this.score = shopInfo.score // 商家评分
    this.goodsCount = shopInfo.cGoods // 前商家商品数
  }
}
// 封装商品参数信息
export class GoodsParam {
  constructor (info, rule) {
    // image可能没有值
    this.image = info.image ? info.image[0] : ''  // 参数信息内的图片
    this.infos = info.set // 参数信息
    this.sizes = rule !== undefined ? rule.tables : []  // 各种款式
    this.sizeList = []  // 能够选择的规格列表，如尺码等，有些商品没有这个列表
    if(this.sizes.length !== 0){
      for(let item of this.sizes){
        for(let i = 1; i < item[0].length; i++){
          this.sizeList.push(item[0][i])
        }
      }
    }
  }
}

