<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="meddle"><slot name="meddle"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    line-height: 44px;
    /* background-color: #bfa;*/
    height: 44px;
    justify-content: space-between;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, .3);
  }
  .left, .right{
    width: 60px;
  }
  .meddle {
    flex: 1;
  }
  
</style>