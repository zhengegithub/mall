<template>
  <div id="home">
    <div class="spaceholder"></div>
    <div class="nav-bar-color">
      <nav-bar><span slot="meddle">购物商城</span></nav-bar>
    </div>
    <home-swiper :banners="banners" />
    <home-recommend :recommends="recommends" />
    <home-feature />
    <tab-control class="tab-control-sticky" :titles="['流行', '新款', '精选']" />
    <ul>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
      <li>adadsdad</li>
    </ul>
  </div>
</template>

<script>
// 导入的公共组件
import NavBar from "components/common/navbar/NavBar";
import TabControl from "../../components/content/tabControl/TabControl";
// 导入的Home的子组件
import HomeSwiper from "./childCompos/HomeSwiper";
import HomeRecommend from "./childCompos/HomeRecommend";
import HomeFeature from "./childCompos/HomeFeature";

import { getHome } from "net/home";

export default {
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHome().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      console.log(res);
    });
  },
};
</script>

<style scoped>
.nav-bar-color {
  background-color: pink;
  color: #fff;
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
}
.spaceholder {
  height: 45px;
}
.tab-control-sticky {
  background-color: #fff;
  position: sticky;
  top: 45px;
}
</style>