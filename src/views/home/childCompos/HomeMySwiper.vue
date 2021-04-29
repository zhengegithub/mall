<template>
  <my-swiper class="swiper-item">
    <swiper-slide class="img-wp" v-for="item in banners" :key="item.id">
      <a :href="item.imgLink">
        <img :src="item.imgUrl" alt="" />
      </a>
    </swiper-slide>
  </my-swiper>
</template>

<script>
import MySwiper from "components/common/myswiper/MySwiper";
export default {
  components: {
    MySwiper,
  },
  // props: {
  //   banners: {
  //     type: Array,
  //     default() {
  //       return [];
  //     },
  //   },
  // },
  data() {
    return {
      banners: [
        {
          id: "001",
          imgUrl: require("../../../assets/img/banner/banner1.png"),
          imgLink:
            "https://act.mogujie.com/huanxin0001?acm=3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",
        },
        {
          id: "002",
          imgUrl: require("../../../assets/img/banner/banner2.jpg"),
          imgLink:
            "https://act.mogujie.com/ruqiu00001?acm=3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119",
        },
        {
          id: "003",
          imgUrl: require("../../../assets/img/banner/banner3.jpg"),
          imgLink:
            "https://act.mogujie.com/huanji001?acm=3.mce.2_10_1jfj8.43542.0.ccy5br4OlfK0S.pos_2-m_453270-sd_119",
        },
        {
          id: "004",
          imgUrl: require("../../../assets/img/banner/banner4.jpg"),
          imgLink:
            "https://act.mogujie.com/liuxing00001?acm=3.mce.2_10_1jepe.43542.0.ccy5br4OlfK0T.pos_3-m_452733-sd_119",
        },
      ],
    };
  },
};
</script>

<style scoped>
.swiper-item {
  /* height: 100%;
  overflow: hidden; */
  height: 100%;
  width: 100%;
  /* flex-shrink: 0; */
}
.img-wp img {
  width: 100%;
}
</style>