<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tab-bar {
  
  /* background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 0 3px rgb(218, 217, 217);
    display: flex;
    justify-content: space-around;
    height: 49px;
    z-index: 999; */
  display: flex;
  justify-content: space-around;
  position: fixed;
  left: 8px;
  right: 0;
  bottom: 20px;
  background-color: #2c313b;
  width: 130px;
  height: 38px;
  border-radius: 8px;
  z-index: 99;
  padding: 0 10px;
}
</style>