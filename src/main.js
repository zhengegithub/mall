import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 在vue原型里创建一个事件总线备用（作用于非父组件的通信）  $bus.$emit()发射事件  $bus.$on('', () => {}接收事件)
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
