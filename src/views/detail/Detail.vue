<template>
  <div class="detail">
    <detail-space-hoder-nav-bar class="space-hoder" />
    <detail-nav-bar
      class="detail-nav-bar"
      :class="{ ShowNavBar: isShowNavBar }"
      @titleClick="titleClick"
      ref="dNav"
    />
    <scroll
      class="wrapper"
      :pullUpLoad="true"
      @isShowPosithon="isShowPosithon"
      ref="scroll"
    >
      <ul>
        <li v-for="(item, index) in $store.state.cartList" :key="index">
          {{item}}
        </li>
      </ul>
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-comment-info ref="commend" :commentInfo="commentInfo" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info
        :detailInfo="detailInfo"
        @detailImgLoad="detailImgLoad"
        ref="goodsImg"
      />
      <detail-param-info :paramInfo="paramInfo" />

      <goods-list ref="recommend" :goods="recommends" />
    </scroll>
    <detail-bottom-bar @addCart="addCart" />
  </div>
</template>

<script>
import DetailNavBar from "./childCompos/DetailNavBar";
import DetailSpaceHoderNavBar from "./childCompos/DetailSpaceHoderNavBar";
import { getDetail, Goods, Shop, GoodsParam, getRecommend } from "net/detail";
import DetailSwiper from "./childCompos/DetailSwiper";
import DetailBaseInfo from "./childCompos/DetailBaseInfo";
import DetailShopInfo from "./childCompos/DetailShopInfo";
import Scroll from "components/common/scroll/Scroll";
import DetailGoodsInfo from "./childCompos/DetailGoodsInfo";
import DetailParamInfo from "./childCompos/DetailParamInfo";
import DetailCommentInfo from "./childCompos/DetailCommentInfo";
import GoodsList from "components/content/goods/GoodsList";
import DetailBottomBar from "./childCompos/DetailBottomBar";

export default {
  name: "Detail",
  data() {
    return {
      isShowNavBar: false,
      iid: null,
      currentIndex: 0,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeScrollYs: [],
    };
  },
  components: {
    DetailNavBar,
    DetailSpaceHoderNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
  },
  created() {
    // console.log(this.$route.params)
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;
    // 2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      // console.log(res);
      // 1.获取顶部图片轮播数据
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 3.获取商家店铺信息
      this.shop = new Shop(data.shopInfo);
      // 4.获取商品的详情数据
      this.detailInfo = data.detailInfo;
      // 5.获取参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 6.获取评论的信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    // 3.请求推荐数据
    getRecommend().then((res) => {
      console.log(res)
      this.recommends = res.data.list;
    });

  
  },
  methods: {
    // scrollerOffset() {
    //   this.isShowNavBar = this.$refs.detailScroll.scroll.y < -100
    //   console,log(this.$refs.detailScroll.scroll.y)
    // },
    isShowPosithon(position) {
      // console.log(position);
      this.isShowNavBar = -position.y > 100;
      const positionY = -position.y;
     
      const length = this.themeScrollYs.length;
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex !== i && ((i < length - 1 &&
            positionY >= this.themeScrollYs[i] &&
            positionY < this.themeScrollYs[i + 1]) ||
          (i === length - 1 && positionY >= this.themeScrollYs[i]))
        ) {
          this.$refs.dNav.activeTitle = i
        }
      }
    },
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scroll.scrollTo(0, -this.themeScrollYs[index], 200);
    },
    // 监听详情图片记载完成
    detailImgLoad() {
      // console.log(111111112222);
      this.$refs.scroll.scroll.refresh();
      this.themeScrollYs = [];
      this.themeScrollYs.push(0);
      this.themeScrollYs.push(this.$refs.commend.$el.offsetTop);
      this.themeScrollYs.push(this.$refs.goodsImg.$el.offsetTop);
      this.themeScrollYs.push(this.$refs.recommend.$el.offsetTop);
      // console.log(this.themeScrollYs);
    },
    addCart() {
      // 1获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

      // 2.将商品加入到购物车里
      // this.$store.commit('addCart', product)
      this.$store.dispatch('addCart', product)
    }
  },
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 999;
  background-color: #fff;
  height: 100vh;
  overflow: hidden;
}
.wrapper {
  height: calc(100% - 44px);
}
.space-hoder {
  z-index: 9;
  position: absolute;
  /* background-color: #bfa; */
}

.detail-nav-bar {
  position: fixed;
  visibility: hidden;
  width: 100%;
  z-index: 99;
}
.ShowNavBar {
  visibility: visible;
}
</style>