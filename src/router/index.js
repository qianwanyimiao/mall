import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用路由懒加载，当访问到对应路由才加载对应组件
const Home = () => import( '../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Detail = () => import('../views/detail/Detail.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: 'mall-首页'
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      title: 'mall-分类'
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      title: 'mall-购物车'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: 'mall-个人主页'
    }
  },
  {
    path: '/detail/:iid',
    component: Detail,
    meta: {
      title: 'mall - 详情页'
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})
// 全局导航守卫，用于改变网页title
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

const VueRouterPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

const VueRouterReplace = VueRouter.prototype.replace

VueRouter.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}


export default router

