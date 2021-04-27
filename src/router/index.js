import Vue from 'vue'
import VueRouter from 'vue-router'

const Zero = () =>import ('views/zero/Zero.vue')
const Home = () =>import ('views/home/Home.vue')
const Category = () =>import ('views/category/Category.vue')
const ShopCart = () =>import ('views/shopcart/ShopCart.vue')
const Profile = () =>import ('views/profile/Profile.vue')
const Detail = () =>import ('views/detail/Detail.vue')

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '',
  //   redirect: '/zero'
  // },
  {
    path: '',
    redirect: '/zero'
  },
  {
    path: '/zero',
    component: Zero
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
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