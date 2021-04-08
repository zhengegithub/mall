<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  
}
</script>

<style scoped>
  .tab-bar{
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px 0px 3px rgba(0,0,0,.3);
    display: flex;
    justify-content: space-around;
    height: 49px;
    z-index: 999;
  }
   
</style>