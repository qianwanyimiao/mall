import Toast from './Toast.vue'

const toastObject = {}

toastObject.install = function (Vue) {
  // 1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  // 2.new一个组件对象
  const toast = new toastConstructor()
  // 3.将组件对象手动挂载到某一个元素
  toast.$mount(document.createElement('div'))
  // 4.toast.$el就是div
  document.body.appendChild(toast.$el)
  // 将toast插件挂载到vue原型
  Vue.prototype.$toast = toast
}

export default toastObject
