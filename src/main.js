import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import {
  Swipe,
  SwipeItem,
  ImagePreview,
} from 'vant';
// 安装自定义插件
// import toast from 'components//common/toast'
// Vue.use(toast)

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(ImagePreview);
// 使用懒加载
Vue.use(VueLazyLoad)

Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false
Vue.config.devtools = true;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
