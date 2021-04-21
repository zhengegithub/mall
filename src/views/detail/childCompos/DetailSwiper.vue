<template>
  <my-swiper class="swiper-item" :topImages="topImages"> </my-swiper>
</template>
<script>
import MySwiper from "components/common/myswiper/MySwiper";
// import 'swiper/swiper-bundle.css'
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
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
</style>