<template>
  <my-swiper class="swiper-item">
    <swiper-slide class="img-wp" v-for="item in topImages" :key="item">
      <img :src="item" alt="" />
    </swiper-slide>
  </my-swiper>
</template>
<script>
import MySwiper from "components/common/myswiper/MySwiper";
// import 'swiper/swiper-bundle.css'
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default: []
    },
  },
  components: {
    MySwiper,
  },
};
</script>

<style scoped>
.swiper-item {
  height: 300px;
  overflow: hidden;
}
.img-wp img {
  width: 100%;
}
</style>