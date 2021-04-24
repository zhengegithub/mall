import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import toast from 'components/common/toast/index'
// import 'default-passive-events'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.config.productionTip = false

// 在vue原型里创建一个事件总线备用（作用于非父组件的通信）  $bus.$emit()发射事件  $bus.$on('', () => {}接收事件)
Vue.prototype.$bus = new Vue()
// swiper插件
Vue.use(VueAwesomeSwiper)
// 自定义安装toast插件
Vue.use(toast)
// 解决移动端300ms延迟
FastClick.attach(document.body)
// 使用图片懒加载插件
Vue.use(VueLazyLoad, {
  // 配置
  // lading: ''
})
new Vue({
  render: h => h(App),
  router,
  store
  // store
}).$mount('#app')
