import { request } from "./request";

// 请求主页的多个数据
export function getHomeMultidata () {
  return request({
    url: '/home/multidata'
  })
}
// 请求主页三个排行榜商品信息
export function getHomeGoods(type, page) {
  return request({
    url: 'home/data',
    params: {
      type,
      page
    }
  })
}
