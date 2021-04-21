<template>
  <swiper :options="swiperOptions">
    <swiper-slide class="img-wp" v-for="item in topImages" :key="item">
      <img :src="item" alt="" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    
  </swiper>
</template>

<script>
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/swiper-bundle.css";
export default {
  name: "MySwiper",
  components: {},
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        // loop: true,
        // autoplay: 2500,
        touchRatio: 2,
        longSwipesRatio: 0.25,
        effect: "coverflow"
        // 用户操作之后是否禁用自动播放
        // autoplayDisableOnInteraction: false,
      },
    };
  },
};
</script>

<style>
.img-wp img {
  width: 100%;
}

</style>