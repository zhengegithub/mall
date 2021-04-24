<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.id">
      <a :href="item.imgLink">
        <img :src="item.imgUrl" alt="" @load="homeSwiperLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  data() {
    return {
    
    }
  }
    
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    homeSwiperLoad() {
      this.$emit('homeSwiperLoader')
    }
  }
};
</script>
<style scoped>

</style>