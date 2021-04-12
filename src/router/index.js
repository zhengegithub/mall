import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>import ('views/home/Home.vue')
const Classify = () =>import ('views/classify/Classify.vue')
const ShopCart = () =>import ('views/shopcart/ShopCart.vue')
const Profile = () =>import ('views/profile/Profile.vue')
const Detail = () =>import ('views/detail/Detail.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router