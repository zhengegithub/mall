<template>
  <div class="shop-cart">
    <!-- 导航栏 -->
    <nav-bar class="cart-nav-bar">
      <div slot="left">
        <div class="icon-wp" @click="backClick">
          <i class="iconfont">&#xe604;</i>
        </div>
      </div>
      <div slot="meddle">购物车({{ cartLength }})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list />
    <!-- 底部结算栏 -->
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";
// vuex里面的辅助函数
import { mapGetters } from "vuex";
export default {
  name: 'ShopCart',
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },
  computed: {
    // vuex getters的映射
    ...mapGetters(["cartLength"]),
  },
  methods: {
    backClick() {
      // this.$router.back();
    },
  },
};
</script>

<style>
@import url("~assets/icon/back/iconfont.css");
.cart-nav-bar {
  background-color: #fff;
}
.icon-wp {
  display: inline;
  padding: 4px 7px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
}
</style>