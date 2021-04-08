<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="tab-bar-icon"></slot></div>
    <div v-else :style="activeStyle"><slot name="tab-bar-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="tab-bar-text"></slot></div> 
  </div>
  
</template>

<script>
export default {
  data (){
    return {
      // isActive: true
    }
  },
   props: {
    path: String,
    activeColor: {
      type: String,
      default: 'deepPink'
    }
  },
  computed: {
     isActive (){
       return this.$route.path == this.path
     },
     activeStyle (){
       return this.isActive ? {color: this.activeColor} : {}
     }
  },
  methods: {
    itemClick (){
                                            // 捕获异常
      this.$router.replace(this.path).catch(error => error)
    }
  }
};
</script>

<style scoped>
@import url('~assets/icon/tabbar/iconfont.css');
  .tab-bar-item {
    font-size: 12px;
    text-align: center;
  }
  .tab-bar-item i{
    display: block;
    margin: 6px 0 3px;
  }
  /* .tab-bar-item .icon2{
    color: rgb(250, 169, 182);
  }  */
  /* .active{
    color: rgb(250, 169, 182);
  } */
</style>