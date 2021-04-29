<template>
  <swiper :options="swiperOptions">
    <slot></slot>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/swiper-bundle.css";
export default {
  name: "MySwiper",
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        // loop: true,
        autoplay: 2500,
        touchRatio: 2,
        longSwipesRatio: 0.25,
        effect: "coverflow",
        // 用户操作之后是否禁用自动播放
        autoplayDisableOnInteraction: false,
      },
    };
  },
};
</script>

<style>

</style>