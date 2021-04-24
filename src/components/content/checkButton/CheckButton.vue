<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default() {
        return false
      }
    }
  }
}
</script>

<style scoped>
  .check-button {
    border: 1px solid rgb(128, 128, 128);
    border-radius: 50%;
    width: 16px;
    height: 16px;
  }
  .check-button img {
    width: 100%;
  }
  .check {
    background-color: #3EC0BE;
    border-color: #fff;
  }
</style>