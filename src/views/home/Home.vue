<template>
  <div id="home">
    <div class="nav-bar-color">
      <nav-bar><span slot="meddle">购物商城</span></nav-bar>
    </div>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabTopControl"
      class="tabHidden"
      :class="{ cTabControl: stopTabControl }"
    />
    <!-- 需要probeType值决定是否开启滚动位置监听 -->
    <scroll
      class="wrapper"
      ref="scroll"
      :probeType="3"
      @isShowPosithon="isShowPosithon"
      :pullUpLoad="true"
      @loadMore="loadMore"
    >
      <home-swiper :banners="banners" />
      <home-recommend :recommends="recommends" />
      <home-feature />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
// 导入的公共组件
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/common/backtop/BackTop";
// 导入的Home的子组件
import HomeSwiper from "./childCompos/HomeSwiper";
import HomeRecommend from "./childCompos/HomeRecommend";
import HomeFeature from "./childCompos/HomeFeature";

import { getHome, getHomeGoods } from "net/home";
import Scroll from "components/common/scroll/Scroll";
export default {
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      isShowBackTop: false,
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      activeType: "pop",
      timer: null,
      tabOffsetTop: 0,
      stopTabControl: false,
      saveY: 0,

    };
  },
  computed: {
    showGoods() {
      return this.goods[this.activeType].list;
    },
  },
  activated() {() => {
    this.$refs.scroll.scrollTo(0, this.saveY, 100)
  }
  },
  deactivated() {() => {
    this.saveY = this.$refs.scroll.scroll.y
  }
  },
  created() {
    // 请求首页轮播图广告横幅和推荐商品的数据
    this.getHome();

    // 请求首页商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    // 运用时间总线监听图片的加载
    this.$bus.$on('homeGoodsLoad', () => {
      this.$refs.scroll.scroll.refresh()
    })
  },
  updated() {
    // 获取TabControl的offsetTop
    if (this.timer === null) {
      this.timer = setTimeout(() => {
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
      }, 100);
    }
    clearTimeout("this.timer");
  },
  methods: {
    // 事件区
    tabClick(index) {
      switch (index) {
        case 0:
          this.activeType = "pop";
          break;
        case 1:
          this.activeType = "new";
          break;
        case 2:
          this.activeType = "sell";
          break;
      }
      // 让两个tabControl保持一致
      this.$refs.tabTopControl.activeIndex = index
      this.$refs.tabControl.activeIndex = index

    },
    backClick() {
      // 方法1. 在父组件的template中的子组件上给一个ref,再访问子组件里的scroll,再调用里面的方法
      // this.$refs.scroll.scroll.scrollTo(0,0,500)
      // 方法2. 直接在子组件写好方法，直接在父组件访问方法
      this.$refs.scroll.backTop(0, 0);
    },
    isShowPosithon(position) {
      this.isShowBackTop = -position.y > 1200;
      this.stopTabControl = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.activeType);
    },

    // 请求方法区
    getHome() {
      getHome().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // 1.解构赋值完成push操作
        this.goods[type].list.push(...res.data.list);

        // 2.for of 循环完成push操作
        // for(let v of res.data.list){
        //   this.goods[type].list.push(v)
        // }
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
.wrapper {
  /* calc计算值 */
  /* height: calc(100% - 94px); */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 0;
  left: 0;
  right: 0;
}
#home {
  /* 设置视口的高度 */
  height: 100vh;
  position: relative;
}
.nav-bar-color {
  background-color: deeppink;
  color: #fff;

  /* position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0; */
}
.tabHidden {
  visibility: hidden;
}
.cTabControl {
  position: relative;
  z-index: 9999;
  background-color: #fff;
  visibility: visible;
}
/* .tab-control-sticky {
  background-color: #fff;
  position: sticky;
  top: 44px;
} */
</style>