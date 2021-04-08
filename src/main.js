import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Swipe,
  SwipeItem,
  ImagePreview,
} from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(ImagePreview);

Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false
Vue.config.devtools = true;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
