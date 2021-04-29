<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="iconfont">&#xe691;</i>
        <span class="text">店铺</span>
      </div>
      <div class="call">
        <i class="iconfont">&#xe612;</i>
        <span class="text">客服</span>
      </div>

      <div>
        <i class="iconfont">&#xe600;</i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy" @click="jumpRouter">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit('addCart')
    },
    jumpRouter() {
      this.$router.push({ path: "/shopcart" });
    }
  },
};
</script>

<style scoped>
@import url("~assets/icon/bottomBar/iconfont.css");
.bottom-bar {
  height: 42px;
  position: fixed;
  background-color: #fff;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  text-align: center;
}

.bar-item {
  flex: 1;
  display: flex;
}

.bar-item > div {
  flex: 1;
}

.bar-left .text {
  font-size: 12px;
}
.call {
  color: deeppink;
}
.bar-left i {
  display: block;
  font-size: 20px;
  margin-top: 3px;
}
.bar-left .service {
  background-position: 0 -54px;
}

.bar-left .shop {
  background-position: 0 -98px;
}

.bar-right {
  font-weight:bolder;
  font-size: 15px;
  color: #fff;
  line-height: 42px;
  
}

.bar-right .cart {
  /* background-color: rgba(253, 206, 206,.8); */
  background-color: #FFECEF;
  color: #FF4466;
 
}

.bar-right .buy {
  background-color: #3EC0BE;
 
}
</style>