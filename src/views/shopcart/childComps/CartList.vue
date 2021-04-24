<template>
  <div class="cart-list">
    <scroll class="wrapper" :pullUpLoad="true" ref="scroll">
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :itemInfo="item"
      />
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem";
export default {
  components: {
    Scroll,
    CartListItem,
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  activated() {
    this.$refs.scroll.scroll.refresh()
  }
};
</script>

<style scoped>
.cart-list {
  height: 100vh;
  overflow: hidden;
}
.wrapper {
  height: calc(100% - 42px - 38px );
  /* background-color: #baf; */
}
</style>