<template>
  <div class="cart-bottom-bar">
    <div class="check-wp">
      <check-button
        class="check-ok"
        :isChecked="isSelectAll"
        @click.native="checkClick"
      />
      <span>全选({{ checkLength }})</span>
    </div>
    <div class="total">合计:{{ totalPrice }}</div>
    <div class="count" @click="countClick">结算</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            // return Math.round(preValue + item.price * item.count)
            let realVal = Number(preValue + item.price * item.count).toFixed(2);
            return Number(realVal);
          }, 0)
      );
    },
    ...mapGetters(["cartList"]),
    checkLength() {
      return this.$store.state.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      if (this.cartList.length)
        return this.cartList.every((item) => item.checked);
    },
  },
  methods: {
    checkClick() {
      // 全部选中状态
      if (this.isSelectAll) {
        this.cartList.forEach((item) => (item.checked = false));
      } else {    //部分选中状态
        this.cartList.forEach((item) => (item.checked = true))
      }
    },
    countClick() {
      this.$toast.show('结算完成')
    }
  },
};
</script>

<style scoped>
.cart-bottom-bar {
  height: 38px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(207, 205, 205);
  display: flex;
  justify-content: space-between;
}
.check-wp {
  /* width: 80px; */
  /* background-color: #bfa; */
  /* height: 100%; */
  display: flex;
}
.check-ok {
  width: 16px;
  height: 16px;
  margin-left: 10px;
  margin-top: 10px;
}
.check-wp span {
  font-size: 13px;
  padding-left: 6px;
  padding-top: 12px;
}
.total {
  line-height: 38px;
  font-size: 12px;
  margin-left: 35%;
}
.count {
  padding: 0 30px;
  background-color: #3EC0BE;
  color: #fff;
  line-height: 38px;
  border-radius: 20px;
}
</style>