<template>
  <div id="app">
    <main-tab-bar />
    <!-- <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive> -->
    <router-view />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";

export default {
  name: "app",
  components: {
    MainTabBar,
  },
};
</script>

<style scoped>
@import url("~assets/css/reset.css");
* { touch-action: pan-y; }
/* @import url('~assets/css/base.css'); */
</style>
