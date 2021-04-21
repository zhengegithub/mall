import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建Store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
   addCounter(state, payload) {
    payload.count++
   },
   addToCart(state, payload) {
    state.cartList.push(payload)
   }
  },
  actions: {
    addCart(context, payload) {
      //1.查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid) 
      // 2.判断oldProduct
      if(oldProduct) {
        // oldProduct.count += 1
        context.commit('addCounter', oldProduct)
      }else {
        payload.count = 1
        // state.cartList.push(payload)
        context.commit('addToCart', payload)
      }
      
    }
  }
})

// 3.挂载到Vue实例上
export default store