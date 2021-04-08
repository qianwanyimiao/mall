// 工具函数，如防抖函数等

// 防抖函数
export function debounce (func, delay=500) {  // 默认延迟设置为500ms
  let timer = null

  return function (...args) {
    if(timer){  // 如果有定时器，先清除定时器重新计时
      clearTimeout(timer)
    }
    timer = setTimeout(() => {  // 在规定时间后再执行函数
      func.apply(this, args)
    }, delay)
  }
}

// 格式化时间戳
export function formatDate (date, fmt) {
  // 匹配年份
  if(/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  // 匹配年份以下
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  // 如果月份等格式要求两位，需要往前面补零
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}

