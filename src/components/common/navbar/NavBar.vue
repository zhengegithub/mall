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
    line-height: 42px;
    /* background-color: #bfa;*/
    height: 42px;
    justify-content: space-between;
    text-align: center;
    box-shadow: 0 0 3px rgb(235, 39, 39);
    
  }
  .left, .right{
    width: 60px;
  }
  .meddle {
    flex: 1;
  }
  
</style>