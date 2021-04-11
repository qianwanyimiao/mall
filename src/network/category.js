import { request } from "./request";

//请求目录信息
export function getCategory() {
  return request({
    url: '/category'
  })
}
// 请求子目录信息
export function getSubcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}
// 请求排行榜商品信息
export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
