import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import {
  Swipe,
  SwipeItem,
  ImagePreview,
  ActionSheet,
  Toast
} from 'vant';
// 安装自定义插件
// import toast from 'components//common/toast'
// Vue.use(toast)

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(ImagePreview);
Vue.use(ActionSheet);
Vue.use(Toast)
// 使用懒加载
Vue.use(VueLazyLoad)

Vue.prototype.$bus = new Vue()

Vue.prototype.$goTo = function(path) {
  this.$router.push({
    path,
  });
};

Vue.prototype.$back = function() {
  this.$router.back();
};

Vue.prototype.$error = function(err, errFunc) {
  if (errFunc) {
    if (errFunc(err)) {
      return;
    }
  }
  Toast.fail({
    message: err.response.data.message || `未知错误${err.response.data}`,
  });
};

Vue.config.productionTip = false
Vue.config.devtools = true;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
